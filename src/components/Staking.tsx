import { useState } from "react";
import { Link } from "react-router-dom";

import ConnectWallet from "./ConnectWallet";
import ConnectWalletIntro from "../pages/Landing/ConnectWalletIntro";

const Staking = () => {

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center pt-[150px] px-[20px]">
        <div className="flex flex-col">
          <div className="text-[300%] font-bold">STAKE DOGE20 TO GROW YOUR HOLDINGS</div>
          <div className="text-[120%] mt-[30px]">DOGE20 staking rewards will be paid out to users every single block, with 15% of the token supply distributed over a 2-year period. Staking rewards are calculated based on your percentage of the DOGE20 staking pool and the current annual returns percentage.</div>
        </div>
        <div className="w-full px-5">
          <div className="relative">
            <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-black z-[2]" />
            <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
            <button className="flex justify-center items-center w-full h-10 mt-[13.66px] text-16 text-black font-bold rounded-[9px] bg-[#1CF2AA] relative z-[3]">
              WITHDRAW STAKED TOKENS
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 pt-[30px] flex-wrap px-[20px] justify-center">
        <div className="rounded-[20px] p-[20px] gap-3 flex flex-col" style={{border:"3px solid #878787", boxShadow:"0 0 10px #0c5d9e1a"}}>
          <h1 className="text-[120%]">STAKED BALANCE</h1>
          <div className="flex flex-row gap-3">
            <h2 className="text-[200%]">0</h2>
            <p className="text-[80%]">DOGE20</p>
          </div>
          <h1 className="text-[120%]">YOUR BALANCE</h1>
          <div className="flex flex-row gap-3">
            <h2 className="text-[200%]">0</h2>
            <p className="text-[80%]">DOGE20</p>
          </div>
        </div>
        <div className="rounded-[20px] p-[20px] gap-3 flex flex-col" style={{border:"3px solid #878787", boxShadow:"0 0 10px #0c5d9e1a"}}>
          <h1 className="text-[120%]">% OF POOL</h1>
          <div className="flex flex-row gap-3">
            <h2 className="text-[200%]">0%</h2>
          </div>
          <h1 className="text-[120%]">TOTAL STAKED</h1>
          <div className="flex flex-row gap-3">
            <h2 className="text-[200%]">62,026,979,032</h2>
            <p className="text-[80%]">DOGE20</p>
          </div>
        </div>
        <div className="rounded-[20px] p-[20px] gap-3 flex flex-col justify-between" style={{border:"3px solid #878787", boxShadow:"0 0 10px #0c5d9e1a"}}>
          <h1 className="text-[120%]">ESTIMATED REWARDS</h1>
          <div className="flex flex-row gap-3">
            <h2 className="text-[200%]">45%</h2>
            <p className="text-[60%]">p/a</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[80%]">Rewards rate is dynamic</p>
            <p className="text-[80%]">Monthly = Returns % / 12</p>
            <p className="text-[80%]">Daily = Returns % / 365</p>
          </div>
        </div>
        <div className="rounded-[20px] p-[20px] gap-3 flex flex-col" style={{border:"3px solid #878787", boxShadow:"0 0 10px #0c5d9e1a"}}>
          <h1 className="text-[120%]">CURRENT REWARDS</h1>
          <div className="flex flex-row gap-3">
            <h2 className="text-[200%]">6751</h2>
            <p className="text-[80%]">Per ETH Block</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staking;