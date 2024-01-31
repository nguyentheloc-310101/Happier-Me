/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

export const WhyItAllStarted = () => {
  return (
    <div className="grid grid-cols-2 py-[139px] bg-[#FFFCFE]">
      <div className="flex flex-col gap-[64px]">
        <div className="w-full flex items-center justify-center">
          <div className="w-[422px] flex items-center justify-center text-stone-800 text-8xl font-semibold font-['Spectral'] leading-[112px]">
            Why It All Started
          </div>
        </div>
        <div className="flex items-start">
          <Image
            width={628}
            height={419}
            src="https://ucarecdn.com/b1102b6d-bd80-47c1-9f9e-8850387172ac/-/format/auto/-/quality/smart/"
            alt=""
          />
        </div>
      </div>
      <div className="w-[596px] text-justify">
        <span className="text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          The World Health Organization (WHO) defines mental health as{' '}
        </span>
        <span className="text-[#2D6D51] text-2xl font-medium font-['Lexend'] leading-loose">
          “a state of well-being in which an individual realises his or her own
          abilities, is able to cope with the normal stresses of life, is able
          to work productively and efficiently, and can contribute to their
          communities”
        </span>
        <span className="text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          .In Vietnam, the prevalence of 10 most common mental disorders is{' '}
        </span>
        <span className="text-[#2D6D51] text-2xl font-medium font-['Lexend'] leading-loose">
          14.9%
        </span>
        <span className="text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          {' '}
          of the population, or nearly{' '}
        </span>
        <span className="text-[#2D6D51] text-2xl font-medium font-['Lexend'] leading-loose">
          15 million people
        </span>
        <span className="text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          . After the COVID-19 pandemic, the rate of people experiencing mental
          health problems increased. It is urgent today to{' '}
        </span>
        <span className="text-[#2D6D51] text-2xl font-medium font-['Lexend'] leading-loose">
          pay attention to mental health
        </span>
        <span className="text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          , placing mental health on an equal footing with physical health. (WHO
          Vietnam, 2022)
          <br />
          <br />
          Enter: the{' '}
        </span>
        <span className="text-[#2D6D51] text-2xl font-medium font-['Lexend'] leading-loose">
          Wellbeing Circles Project
        </span>
        <span className="text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          {' '}
          by Happier Me, a social enterprise dedicated to helping people develop
          positive life-changing habits, cultivating inner strength, enhancing
          wellbeing and nurturing healthier communities.
        </span>
      </div>
    </div>
  );
};
