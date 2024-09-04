import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-[#24EACC] pt-48 p-5 px-4 md:px-10 lg:px-32 h-screen text-black">
      <HeroSection />
    </main>
  );
}
