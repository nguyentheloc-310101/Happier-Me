/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { heroImage } from '../home/images/image';

interface HeroSectionProps {
  imageBackground: string;
  title: string;
  rightImage: string;
}
export const HeroSection = ({
  imageBackground,
  title,
  rightImage,
}: HeroSectionProps) => {
  return (
    <div>
      <img
        src={heroImage}
        className="w-full h-screen object-cover"
        alt="Picture of the author"
      />
    </div>
  );
};
