import { DataProp } from "@/dummy-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AllProjects = ({
  name,
  nameTag,
  image,
  price,
  tmv,
  gdp,
  dept,
  listing,
  balance,
}: DataProp) => {
  const dynamicHref = `/projects/${nameTag}`;

  return (
    <div>
      <Link href={dynamicHref}>
        <ul className="group grid grid-cols-9 py-6 border-b text-[#757575] hover:bg-input font-semibold cursor-pointer">
          <li className="name flex gap-2 col-span-3">
            <Image src={image} alt="image" height={28} width={28} />
            <p className="text-lg">{name}</p>
            <p className="bg-input bg-opacity-25 rounded-3xl px-3 text-xs font-light group-hover:bg-[#24EACC] group-hover:text-black py-1 h-fit">
              {nameTag}
            </p>
          </li>
          <li>${price}</li>
          <li>${tmv}T</li>
          <li>${gdp}T</li>
          <li>${dept}B</li>
          <li>{listing}</li>
          <li>{balance}</li>
        </ul>
      </Link>
    </div>
  );
};
