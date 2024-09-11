"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import Logo from "../../public/images/logo.png";
import LogoLight from "../../public/images/logo-light.png"; // Import the light logo
import { MenuIcon, X } from "lucide-react";
import { baseSepolia } from "thirdweb/chains";
import { ConnectButton, ThirdwebProvider, darkTheme } from "thirdweb/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createThirdwebClient } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { OnchainWallet } from "./OnchainWallet";

// Initialize QueryClient for React Query
const queryClient = new QueryClient();

const customTheme = darkTheme({
  colors: {
    modalBg: "black",
    primaryButtonBg: "#24EACC",
  },
});

// Thirdweb client configuration
const client = createThirdwebClient({
  clientId: "3fdd5975bba4b76e684bbe7fd6703959",
});

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Use router to track the current route
  const [isHome, setIsHome] = useState(true); // State to check if we're on the home route

  useEffect(() => {
    // Check if the current route is home
    setIsHome(router.pathname === "/");

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("text-white", "shadow-lg");
          navbar.classList.remove("text-background");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove("text-white", "shadow-lg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]); // Re-run effect when the route changes

  const links = [
    { name: "Projects", url: "/projects" },
    { name: "Enterprise", url: "/" },
    { name: "Create Index", url: "/create-index" },
    { name: "Resources", url: "/" },
    { name: "About", url: "/" },
  ];

  const navLinks = () => (
    <ul className="flex flex-col gap-4 lg:flex-row lg:gap-5">
      {links.map((link, index) => (
        <li
          key={index}
          className="hover:bg-gray-600/50 px-2 rounded-lg hover:text-white"
        >
          <Link href={link.url}>
            <p>{link.name}</p>
          </Link>
        </li>
      ))}
      <li className="block xs:hidden hover:bg-gray-600/50 px-2 rounded-lg hover:text-white">
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={customTheme}
          chain={baseSepolia}
        />
        <OnchainWallet />
      </li>
    </ul>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider>
        <div
          id="navbar"
          className={`page-transition flex z-50 items-center justify-between p-5 px-4 md:px-10 lg:px-32 text-center fixed w-full backdrop-blur-md ${
            isHome ? "text-background" : "text-white"
          }`} // Change text color based on route
        >
          {/* Logo on the left */}
          <Link href={"/"}>
            <h1 className="font-semibold text-lg flex items-center">
              <Image
                src={isHome ? Logo : LogoLight} // Use the appropriate logo based on route
                alt="logo"
                height={30}
                width={30}
                className="h-5 w-5 mr-2"
              />
              GeoMarkt
            </h1>
          </Link>

          {/* Mobile Menu Toggle on the right */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-50">
            {isOpen ? (
              <X size={30} className="cursor-pointer" />
            ) : (
              <MenuIcon size={30} className="cursor-pointer" />
            )}
          </button>

          {/* Desktop Links - shown on large screens */}
          <ul className="hidden lg:flex gap-5 ml-auto">
            {links.map((link, index) => (
              <li key={index} className="hover:underline font-light">
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop ConnectButton */}
          <div className="hidden lg:flex">
            <ConnectButton
              client={client}
              wallets={wallets}
              theme={customTheme}
              chain={baseSepolia}
            />
            <OnchainWallet />
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40 lg:hidden">
              <div className="bg-white p-8 rounded-lg w-4/5 max-w-sm">
                <nav>{navLinks()}</nav>
              </div>
            </div>
          )}
        </div>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
};
