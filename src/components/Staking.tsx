import { useState } from "react";
import { Link } from "react-router-dom";

import ConnectWallet from "./ConnectWallet";
import ConnectWalletIntro from "../pages/Landing/ConnectWalletIntro";

const Staking = () => {

  return (
    <div>
      <div className="flex justify-between item-center pt-[150px]">
        <div className="flex flex-col">
          <div>STAKE DOGE20 TO GROW YOUR HOLDINGS</div>
          <div>DOGE20 staking rewards will be paid out to users every single block, with 15% of the token supply distributed over a 2-year period. Staking rewards are calculated based on your percentage of the DOGE20 staking pool and the current annual returns percentage.</div>
        </div>
        <div className="w-full px-5">
          <div className="relative">
            <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-black z-[2]" />
            <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
            <button className="flex justify-center items-center w-full h-10 mt-[13.66px] text-16 text-black font-bold rounded-[9px] bg-[#1CF2AA] relative z-[3]">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Staking;