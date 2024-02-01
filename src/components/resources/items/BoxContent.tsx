import Image from 'next/image';
import React from 'react';

interface IBoxContentProps {
  type: 'VIDEO' | 'READING';
  image: string;
  title: string;
  description: string;
}
export const BoxContent = ({
  type,
  image,
  title,
  description,
}: IBoxContentProps) => {
  return (
    <div className="w-[360px] h-[429px] flex flex-col justify-start items-start gap-4 my-[4rem]">
      <div className="w-[360px] h-[270px] bg-stone-800 bg-opacity-70 rounded-[45px]" />
      <Image
        src={image}
        alt=""
        height={270}
        width={360}
        className="object-cover rounded-[45px]"
      />
      <div className=" ml-[12px] flex-col justify-start items-start flex">
        <div className=" flex-col justify-start items-start gap-2 flex">
          <div className=" text-stone-800 text-[32px] font-semibold font-['Spectral'] leading-10">
            {title}
          </div>
          <div className=" text-stone-800 text-2xl font-normal font-['Lexend'] leading-10">
            {description}
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${type == 'READING' ? '#FEBE3B' : '#E2B9EF'}`,
          }}
          className={`px-[16px] w-[101px]  rounded-[45px] justify-center items-center gap-2.5 inline-flex`}>
          <div className="text-center text-stone-800 text-2xl font-medium font-['Lexend']">
            {type == 'VIDEO'
              ? 'Video'
              : type == 'READING'
              ? 'Reading'
              : 'undefined'}
          </div>
        </div>
      </div>
    </div>
  );
};
