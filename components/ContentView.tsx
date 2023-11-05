import type { NextPage } from "next";
import Image from "next/image";
import { data } from "@data";
const ContentView: NextPage = () => {
  const getScoreColor = (score: any) => {
    const scoreValue = parseFloat(score.replace("%", ""));
    if (scoreValue >= 60) {
      return "text-green-500";
    } else if (scoreValue <= 30) {
      return "text-red-500";
    } else if (scoreValue === 0) {
      return "text-orange-500";
    } else {
      return "text-gray-900"; // Default color for other scores
    }
  };
  return (
    <div className="absolute top-[60px] left-[319px]  w-[1129px] h-[910px] overflow-hidden  flex flex-col items-start justify-start p-8 box-border gap-[32px] text-left text-sm text-gray-600 font-body-small-strong">
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <div className=" w-[340px] flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[21px]">Filter by</div>
          <div className="self-stretch rounded bg-base-white flex flex-row items-center justify-start py-2.5 px-4 gap-[16px] text-base text-gray-900 border-[1px] border-solid border-gray-300">
            <div className="flex-1 relative leading-[24px]">
              Accounts who have completed
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="arrow-down 1.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[21px]">Conditions</div>
          <div className="self-stretch rounded bg-base-white flex flex-row items-center justify-start py-[9px] pr-4 pl-[9px] gap-[16px] text-xs text-gray-900 border-[1px] border-solid border-gray-300">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <div className="rounded bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-[8px]">
                <div className="relative leading-[18px]">Files added</div>
                <Image
                  width={15}
                  height={15}
                  className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                  alt=""
                  src="close-square 1.svg"
                />
              </div>
              <div className="rounded bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-[8px]">
                <div className="relative leading-[18px]">Contacts added</div>
                <Image
                  width={15}
                  height={15}
                  className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                  alt=""
                  src="close-square 1.svg"
                />
              </div>
              <div className="rounded bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-[8px]">
                <div className="relative leading-[18px]">
                  Representatives invited
                </div>
                <Image
                  width={15}
                  height={15}
                  className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                  alt=""
                  src="close-square 1.svg"
                />
              </div>
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="arrow-down 1.svg"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col  w-full justify-between items-center text-lg">
        <div className="flex w-full justify-between bg-gray-25 px-4 py-4 rounded">
          <div className="pl-[41px]"></div>
          <div className=" flex-1 w-32">Account</div>
          <div className="flex-1 w-16 ">Account score</div>
          <div className="flex-1 w-16">KYB/KYC status</div>
          <div className="flex-1 w-16">Country</div>
          <div className="flex-1 w-32">Last updated</div>
          <div className="flex-1 w-16"></div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex w-full justify-between  px-4 py-4 rounded border-b-[1px] gap-4"
          >
            <div>
              <div className="w-full relative box-border h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-end py-1.5   hover:cursor-pointer">
                <Image
                  width={24}
                  height={24}
                  className="relative  overflow-hidden shrink-0"
                  alt=""
                  src={item.image}
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 w-32">
              <div className=" text-lg font-bold text-black	">
                {item.account}
              </div>
              <span className=" text-base ">{item.id}</span>
            </div>
            <div className={`flex-1 w-16 ${getScoreColor(item.score)}`}>
              {item.score}
            </div>
            <div className={`flex-1 w-16 ${getScoreColor(item.score)}`}>
              {item.status}
            </div>
            <div className="flex-1 w-16">{item.country}</div>
            <div className="flex-1 w-32">{item.lastUpdate}</div>
            <div className="flex-1 w-16">
              <div className="w-full relative box-border h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-end py-1.5 px-4  hover:cursor-pointer">
                <Image
                  width={16}
                  height={16}
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="trash 1.svg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentView;
