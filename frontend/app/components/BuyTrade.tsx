import React from "react";
import SwapImage from "../../public/images/swap-image.png";
import Image from "next/image";

const BuyTrade = ({getData}: any) => {
  return (
    <div className="swap grid gap-5">
      <div className="grid grid-cols-2">
        <p className="border-b-2 border-[#24EACC] text-center py-2">
          Buy {getData.nameTag}
        </p>
        <p className="border-b-2 active:border-[#24EACC] text-center py-2">
          Trade KSB
        </p>
      </div>
      <div className="flex bg-[#262626] bg-opacity-20 border border-[#C9C9C9] rounded-lg p-3">
        <input
          type="number"
          placeholder="0"
          className="bg-transparent text-[#C9C9C9] w-full outline-none"
        />
        <div className="flex gap-1">
          <Image
            src={SwapImage}
            alt="swapImage"
            height={17}
            width={12}
            className="h-[17px] w-[12px] m-auto"
          />
          <p>KSB</p>
        </div>
      </div>
      <div className="flex bg-[#262626] bg-opacity-20 border border-[#C9C9C9] rounded-lg p-3">
        <input
          type="number"
          placeholder="Amount"
          className="bg-transparent text-[#C9C9C9] w-full outline-none"
        />
        <div className="flex gap-1">
          <p className="font-light">0</p>
          <p>KSB</p>
        </div>
      </div>
      <button className="bg-[#24EACC] w-full px-8 py-3 text-black rounded-3xl">
        BUY {getData.nameTag}
      </button>
    </div>
  );
};

export default BuyTrade;
