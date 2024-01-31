import React from 'react';
interface ICircleInfoProps {
  order: any;
  title: string;
  content: string;
  color: string;
}
export const CircleInfo = ({
  order,
  title,
  content,
  color,
}: ICircleInfoProps) => {
  return (
    <div className="w-[419px] h-[419px] relative">
      <div
        style={{ backgroundColor: `${color}` }}
        className="w-[419px] h-[419px] left-0 top-0 absolute  rounded-full"
      />
      <div className="w-[419px] h-[419px] px-14 left-0 top-0 absolute flex-col justify-center items-center gap-10 inline-flex">
        <div className="self-stretch h-[65px] flex-col justify-start items-center gap-4 flex">
          <div className="text-stone-800 text-2xl font-medium font-['Lexend'] uppercase">
            Objective {order}
          </div>
          <div className="self-stretch text-center text-stone-800 text-5xl font-medium font-['Spectral']">
            {title}
          </div>
        </div>
        <div className="self-stretch text-center text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
          {content}
        </div>
      </div>
    </div>
  );
};
