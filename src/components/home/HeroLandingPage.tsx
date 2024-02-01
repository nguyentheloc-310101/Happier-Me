/* eslint-disable @next/next/no-img-element */
// Import Swiper React components

import { heroImage } from './images/image';

export const HeroLandingPage = () => {
  return (
    <div className="relative">
      <img
        src={heroImage}
        className="w-full h-screen object-cover "
        alt="Picture of the author"
      />
      <div className="absolute top-[10%] left-[10%]">
        <div className="w-full h-[414px] flex-col justify-start items-start gap-16 inline-flex">
          <div className="w-[965px]">
            <span className="text-pink-50 text-7xl font-semibold font-['Spectral'] leading-[80px]">
              Creating a more positive, supportive learning environment that
              truly{' '}
            </span>
            <span className="text-slate-300 text-7xl font-semibold font-['Spectral'] leading-[80px]">
              cares
            </span>
            <span className="text-pink-50 text-7xl font-semibold font-['Spectral'] leading-[80px]">
              .
            </span>
          </div>
          <div className="w-[965px] text-justify text-white text-[32px] font-normal font-['Lexend'] leading-10">
            A Happier Me’s Wellbeing Circle promotes student-led wellbeing
            circles in high schools and universities in Vietnam, teaches Social
            Emotional Learning (SEL) capabilities, and empowers students’ social
            & personal growth.
          </div>
        </div>
      </div>
    </div>
  );
};
