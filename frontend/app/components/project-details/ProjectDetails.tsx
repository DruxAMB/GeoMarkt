import { Star } from "lucide-react";
import React from "react";
import { FullChart } from "../FullChart";
import ProjectImage from "../../../public/images/project-banner.png";
import Image from "next/image";
import BuyTrade from "../BuyTrade";

export const ProjectDetails = ({ getData }: any) => {
  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="grid gap-3 col-span-2 h-fit">
        <li className="name flex gap-2">
          {/* <Image src={getData.image} alt="image" height={28} width={28} /> */}
          <div className="w-[28px] h-[28px] bg-green-300 rounded-full"></div>
          <p className="text-lg">{getData.name}</p>
          <p className="bg-input bg-opacity-25 rounded-3xl px-3 text-xs font-light group-hover:bg-[#24EACC] group-hover:text-black py-1 h-fit">
            {getData.nameTag}
          </p>
          <Star className="w-[20px] h-[20px] my-auto" />
        </li>
        <div className="grid gap-2">
          <p className="text-sm text-[#C9C9C9]">Available</p>
          <div className="flex gap-2 text-center w-fit">
            <h1 className="text-3xl font-bold">
              {getData.listing}/{getData.nameTag}
            </h1>
            <p className="m-auto text-[#C9C9C9]">≈</p>
            <p className="m-auto text-lg text-[#C9C9C9]">${getData.listing}</p>
          </div>
        </div>
        <div className="bg-[#262626] bg-opacity-50 border rounded-lg w-44 p-3">
          <p>{getData.listing}/KSB</p>
          <div className="flex gap-2 text-center text-[#C9C9C9] rounded-lg">
            <h1 className="text-lg font-bol">230 KSB</h1>
            <p className="m-auto">≈</p>
            <p className="m-auto">{getData.price}</p>
          </div>
        </div>
        <ul className="group grid grid-cols-5 py-6">
          <li className="name gap-2 col-span-4 text-[#C9C9C9]">
            <p className="text-lg border-b px-2 py-4">
              Total Market Value (TMV)
            </p>
            <p className="text-lg border-b px-2 py-4">
              Gross Domestic Product (GDP)
            </p>
            <p className="text-lg border-b px-2 py-4">Mortgage Debt</p>
            <p className="text-lg border-b px-2 py-4">New Listings</p>
            <p className="text-lg border-b px-2 py-4">Sales-to-Listing Ratio</p>
          </li>
          <li className="name gap-2">
            <p className="text-lg border-b px-2 py-4">${getData.tmv}T</p>
            <p className="text-lg border-b px-2 py-4">${getData.gdp}T</p>
            <p className="text-lg border-b px-2 py-4">${getData.gdp}T</p>
            <p className="text-lg border-b px-2 py-4">{getData.listing}/d</p>
            <p className="text-lg border-b px-2 py-4">94%</p>
          </li>
        </ul>
        <BuyTrade getData={getData} />
      </div>
      <div className="about grid gap-5 col-span-3">
        <FullChart />
        <Image src={ProjectImage} alt="banner" height={93} width={833} />
        <div className="about grid gap-3 border-b pb-10">
          <p className="font-semibold text-xl">{getData.about}</p>
          <p className="text-lg text-[#C9C9C9]">{getData.aboutP}</p>
        </div>
        <div className="estate grid gap-3">
          <p className="font-semibold text-xl">
            NYC Real Estate Market Insights
          </p>
          <div className="flex gap-5  border-b pb-5">
            <div>
              <p>4.1%</p>
              <p className="text-[#C9C9C9]">Job Growth Rate</p>
            </div>
            <div>
              <p>3.25%</p>
              <p className="text-[#C9C9C9]"> Interest Rate</p>
            </div>
            <div>
              <p>5.2%</p>
              <p className="text-[#C9C9C9]">Rental Yield</p>
            </div>
            <div>
              <p>2.5%</p>
              <p className="text-[#C9C9C9]">Unemployment Rate</p>
            </div>
            <div>
              <p>$1.2 Million</p>
              <p className="text-[#C9C9C9]">Median House Price</p>
            </div>
          </div>
          <div className="flex gap-5  border-b pb-5">
            <div>
              <p>0.65%</p>
              <p className="text-[#C9C9C9]">Property Tax Rate</p>
            </div>
            <div>
              <p>$1.2 Million</p>
              <p className="text-[#C9C9C9]">Median House Price</p>
            </div>
            <div>
              <p>4.7%</p>
              <p className="text-[#C9C9C9]">Rental Vacancy Rate</p>
            </div>
            <div>
              <p>4.7%</p>
              <p className="text-[#C9C9C9]">Avg 30yr Mortgage Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
