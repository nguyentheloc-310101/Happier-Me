'use client';
import { logo, navigationHeader } from '@/constant';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className="sticky top-0 z-[999] flex py-[28px] px-[64px] bg-[white] items-center justify-between">
      <div className="flex items-center justify-center gap-[16px]">
        <Image
          src={logo}
          alt="Logo happier"
          width={255}
          height={100}
          className="object-contain"
        />
        <div className="flex gap-[48px]">
          {navigationHeader.map((item, index) => (
            <Link
              href={item.link}
              className="text-[#2D2016] rounded-[45px] px-[24px] py-[10px] font-bold text-[20px] leading-normal cursor-pointer hover:text-[#4e453ffe] hover:bg-[#AFD8E6]"
              key={index}>
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Button
          className="w-auto bg-[#333] text-[white]"
          // icon={<ArrowLongRightIcon />}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
