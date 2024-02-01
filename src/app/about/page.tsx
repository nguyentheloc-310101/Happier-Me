import {
  OurMission,
  ThreePhases,
  WhyItAllStarted,
  HeroSectionAboutUs,
} from '@/components/about-us';
import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <HeroSectionAboutUs />
      <WhyItAllStarted />
      <OurMission />
      <ThreePhases />
    </div>
  );
};

export default AboutUsPage;
