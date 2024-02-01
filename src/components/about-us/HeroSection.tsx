import React from 'react';

export const HeroSectionAboutUs = () => {
  return (
    <div className="w-full h-[802px] px-16 pt-12 pb-16 bg-slate-300 justify-between items-end inline-flex">
      <div className="w-[596px] self-stretch flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[421px] flex-col justify-start items-start gap-16 flex">
          <div className="text-stone-800 text-[144px] font-semibold font-['Spectral']">
            About Us
          </div>
          <div className="self-stretch text-stone-800 text-[32px] font-normal font-['Lexend']">
            Wellbeing Circles started as Happier Me’s nonprofit project,
            designed to contribute to creating a more positive, supportive, and
            empathetic school environment around issues surrounding mental
            health and the well-being of students.
          </div>
        </div>
      </div>
      <div className="w-[672px] h-[673px] relative">
        <div className="w-[168.13px] h-[168.13px] left-[168.13px] top-[336.25px] absolute bg-amber-400 rounded-full" />
        <div className="w-[168.13px] h-[168.13px] left-[503.88px] top-[504.87px] absolute bg-pink-50 rounded-full" />
        <img
          className="w-[168.13px] h-[168.13px] left-[503.88px] top-0 absolute rounded-full"
          src="https://via.placeholder.com/168x168"
        />
        <img
          className="w-[168.13px] h-[168.13px] left-0 top-[336.25px] absolute rounded-full"
          src="https://via.placeholder.com/168x168"
        />
        <div className="w-[168.13px] h-[168.13px] left-0 top-0 absolute bg-rose-300 rounded-full" />
      </div>
    </div>
  );
};
