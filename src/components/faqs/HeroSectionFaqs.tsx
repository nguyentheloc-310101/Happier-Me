import React from 'react';

export const HeroSectionFaqs = () => {
  return (
    <div className="w-full h-[802px] px-16 pt-12 pb-16 bg-[#FEBE3B] justify-between items-end inline-flex">
      <div className="w-[596px] self-stretch flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[421px] flex-col justify-start items-start gap-16 flex">
          <div className="text-stone-800 text-[144px] font-semibold font-['Spectral']">
            FAQs
          </div>
          <div className="self-stretch text-stone-800 text-[32px] font-normal font-['Lexend']">
            A quick guide to what Wellbeing Circle is all about and our most
            popular questions.
          </div>
        </div>
      </div>
      <div className="w-[672.38px] h-[672.25px] relative">
        <div className="w-[168.13px] h-[168.13px] left-0 top-0 absolute bg-slate-300 rounded-full" />
        <div className="w-[168.13px] h-[168.13px] left-[168px] top-[504px] absolute bg-rose-300 rounded-full" />
        <div className="w-[168.13px] h-[168.13px] left-0 top-[168px] absolute bg-purple-300 rounded-full" />
      </div>
    </div>
  );
};
