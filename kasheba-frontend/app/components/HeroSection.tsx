import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/hero-image.png";

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-[56px] text-center font-bold max-w-[710px] m-auto leading-snug">
        Invest in Real Estate, Globally Own the Future.
      </h1>
      <div className="relative">
        <p className="max-w-[638px] m-auto text-center absolute left-1/2 transform -translate-x-1/2">
          Invest in global real estate markets through innovative crypto tokens.
          Own a piece of the future and unlock exciting growth opportunities
          around the world.
        </p>
        <Image
          src={HeroImage}
          alt="hero-image"
          height={498}
          width={1431}
          className="w-full h-[440px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
