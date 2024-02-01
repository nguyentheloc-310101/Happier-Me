import {
  OurMission,
  ThreePhases,
  WhyItAllStarted,
  HeroSectionAboutUs,
} from '@/components/about-us';
import React from 'react';

const AboutUsPage = () => {
  return (
    <>
      <HeroSectionAboutUs />
      <WhyItAllStarted />
      <OurMission />
      <ThreePhases />
    </>
  );
};

export default AboutUsPage;
