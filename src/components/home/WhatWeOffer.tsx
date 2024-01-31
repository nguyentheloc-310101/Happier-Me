import React from 'react';
import ItemInfo from './offers/ItemInfo';
import { whatWeOffer } from '@/constant';

export const WhatWeOffer = () => {
  return (
    <div className="grid grid-cols-2 items-center ">
      <div className="flex items-center justify-center">
        <div className="max-w-[421px] flex flex-col gap-[64px]">
          <div className="title-what-we-offer "> What we offer</div>
          <div className="text-[24px] font-normal leading-[32px]">
            We believe that every young person deserves to be successful and
            happy amidst the pressures and fluctuations of the external
            environment. To support you on your Wellbeing Circle journey,
            Happier Me provides these resources and more, free of charge.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] items-end ">
        {whatWeOffer.map((item, index) => {
          return (
            <div key={index}>
              <ItemInfo
                color={item.color}
                content={item.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
