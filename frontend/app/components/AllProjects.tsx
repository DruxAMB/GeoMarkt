import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AllProjects = ({ data }: any) => {
  const dynamicHref = `/projects/${data.nameTag}`;

  return (
    <div>
      <Link href={dynamicHref}>
        <ul
          className="group grid grid-cols-9 py-6 border-b text-[#757575] hover:bg-input font-semibold cursor-pointer"
        >
          <li className="name flex gap-2 col-span-3">
            <Image src={data.image} alt="image" height={28} width={28} />
            <p className="text-lg">{data.name}</p>
            <p className="bg-input bg-opacity-25 rounded-3xl px-3 text-xs font-light group-hover:bg-[#24EACC] group-hover:text-black py-1 h-fit">
              {data.nameTag}
            </p>
          </li>
          <li>${data.price}</li>
          <li>${data.tmv}T</li>
          <li>${data.gdp}T</li>
          <li>${data.dept}B</li>
          <li>{data.listing}</li>
          <li>{data.balance}</li>
        </ul>
      </Link>
    </div>
  );
};
