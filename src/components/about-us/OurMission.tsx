import React from 'react';
import { CircleInfo } from './items/CircleInfo';
import { ourMission } from '@/constant';

export const OurMission = () => {
  return (
    <div className="flex flex-col bg-[#FCF3F8] py-[139px] ">
      <div className="px-[152px] flex items-center justify-between">
        <div className="w-[422px] text-stone-800 text-8xl font-semibold font-['Spectral'] leading-[112px]">
          Our Mission
        </div>
        <div className="w-[596px] text-justify text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          The goal of Wellbeing Circles is to raise awareness of social
          emotional health, including mental health among students. We believe
          that every young person deserves to be successful and happy amidst the
          pressures and fluctuations of the external environment.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center px-[151px] gap-[5rem] my-[2rem]">
        {ourMission.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CircleInfo
                order={index + 1}
                title={item.title}
                content={item.content}
                color={item.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
