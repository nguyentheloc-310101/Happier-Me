import Image from 'next/image';
import React from 'react';

export const CommunityActivityBuild = () => {
  return (
    <div className="w-full h-[835px] pl-[101px] pr-2.5 pt-[100px] pb-[84px] bg-[#FFFCFE] flex-col justify-start items-start gap-24 inline-flex">
      <div className="w-[821px] text-stone-800 text-8xl font-semibold font-['Spectral'] leading-[112px]">
        Community activities build...
      </div>
      <div className="w-full py-[71px] flex justify-center items-center gap-10">
        <div className="w-[225px] h-[238px] flex-col justify-center items-center gap-14 inline-flex">
          <div className="flex-col justify-start items-center gap-[57px] flex">
            <div className="w-[150px] h-[138.89px] relative ">
              <div className="w-[138.89px] h-[138.89px] left-[10.76px] top-0 absolute bg-rose-300 rounded-full" />
              <div className="w-[138.89px] h-[138.89px] left-0 top-0 absolute bg-pink-50 rounded-full" />
              <div className="w-[75px] h-[75px] left-[34px] top-[31px] absolute">
                <div className="w-[69.64px] h-[69.36px] left-[2.68px] top-[2.82px] absolute">
                  <Image
                    src="https://ucarecdn.com/74ff7518-2bbf-4062-9c81-d3e5cdfc546f/-/format/auto/-/quality/smart/"
                    alt=""
                    height={75}
                    width={75}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="text-center text-stone-800 text-[35px] font-normal font-['Lexend']">
              excellence
            </div>
          </div>
        </div>
        <div className="w-[225px] flex-col justify-start items-center gap-14 inline-flex">
          <div className="w-[150px] h-[138.89px] relative ">
            <div className="w-[138.89px] h-[138.89px] left-[10.76px] top-0 absolute bg-amber-400 rounded-full" />
            <div className="w-[138.89px] h-[138.89px] left-0 top-0 absolute bg-pink-50 rounded-full" />
            <div className="w-[59.52px] h-[59.52px] left-[39.68px] top-[39.68px] absolute">
              <div className="h-[55.27px] left-[9.04px] top-[2.13px] absolute">
                {' '}
                <Image
                  src="https://ucarecdn.com/42f5ed49-c5c9-4dd2-8fff-061fb295f93c/-/format/auto/-/quality/smart/"
                  alt=""
                  height={75}
                  width={75}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="w-[261px] h-[43px] text-center text-stone-800 text-[35px] font-normal font-['Lexend']">
            compassion
          </div>
        </div>
        <div className="w-[225px] px-[11px] flex-col justify-start items-center gap-14 inline-flex">
          <div className="w-[150px] h-[138.89px] relative ">
            <div className="w-[138.89px] h-[138.89px] left-[10.76px] top-0 absolute bg-teal-800 rounded-full" />
            <div className="w-[138.89px] h-[138.89px] left-0 top-0 absolute bg-pink-50 rounded-full" />
            <div className="w-[59.52px] h-[59.52px] left-[39.68px] top-[39.68px] absolute">
              <div className="w-[55.27px] h-[55.27px] left-[2.13px] top-[2.13px] absolute">
                {' '}
                <Image
                  src="https://ucarecdn.com/be3b21de-a7e5-4dfa-8006-73b1152a941b/-/format/auto/-/quality/smart/"
                  alt=""
                  height={75}
                  width={75}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-stone-800 text-[35px] font-normal font-['Lexend']">
            connection
          </div>
        </div>
        <div className="w-[225px] flex-col justify-start items-center gap-14 inline-flex">
          <div className="w-[150px] h-[138.89px] relative ">
            <div className="w-[138.89px] h-[138.89px] left-[10.76px] top-0 absolute bg-slate-300 rounded-full" />
            <div className="w-[138.89px] h-[138.89px] left-0 top-0 absolute bg-pink-50 rounded-full" />
            <div className="w-[75px] h-[75px] left-[31px] top-[31px] absolute">
              <div className="w-[68.18px] h-[65.65px] left-[3.41px] top-[4.67px] absolute">
                {' '}
                <Image
                  src="https://ucarecdn.com/a2631852-131c-40de-87fa-795288b1bd73/-/format/auto/-/quality/smart/"
                  alt=""
                  height={75}
                  width={75}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-stone-800 text-[35px] font-normal font-['Lexend']">
            mindfulness
          </div>
        </div>
      </div>
    </div>
  );
};
