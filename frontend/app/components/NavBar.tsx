"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { MenuIcon, X } from "lucide-react";
import ConnectButton from './ConnectButton'; // Import the ConnectButton component

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("text-basewhite", "shadow-lg");
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.add("bg-transparent");
          navbar.classList.remove("text-basewhite", "shadow-lg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Enterprise",
      url: "/",
    },
    {
      name: "Pricing",
      url: "/",
    },
    {
      name: "Resources",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
  ];

  const navLinks = () => {
    return (
      <ul className="flex gap-2 lg:gap-5 flex-col md:flex-row">
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
          <ConnectButton /> 
        </li>
      </ul>
    );
  };

  return (
    <div
      id="navbar"
      className="page-transition flex z-50 items-center justify-between p-5 px-4 md:px-10 lg:px-32 text-center text-background fixed w-full backdrop-blur-md"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {isOpen ? (
          <X size={30} className="lg:hidden cursor-pointer z-40" />
        ) : (
          <MenuIcon size={30} className="lg:hidden cursor-pointer z-40" />
        )}
      </button>
      <Link href={"/"}>
        <h1 className="font-semibold text-lg flex">
          <Image
            src={Logo}
            alt="logo"
            height={30}
            width={30}
            className="h-5 w-5 m-auto"
          />
          Kasheba
        </h1>
      </Link>
      <ul className="flex gap-5 max-lg:hidden">
        {links.map((link, index) => (
          <Link key={index} href={link.url}>
            <li className="hover:underline font-light">{link.name}</li>
          </Link>
        ))}
      </ul>
      <ul className="items-center lg:hidden">
        {links.map((link, index) => (
          <Link key={index} href={link.url}>
            <li className="hover:underline font-light">{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className="items-center max-lg:hidden">
      
        <ConnectButton /> {/* Add ConnectButton here for larger screens */}
      </div>
    </div>
  );
};