import {
  HeroLandingPage,
  WhatWeOffer,
  GuideLines,
  SignUpToday,
} from '@/components/home';

export default function Home() {
  return (
    <div>
      <HeroLandingPage />
      <div className="mt-[136px]">
        <WhatWeOffer />
      </div>
      <div className="p-[96px]">
        <GuideLines />
      </div>
      <SignUpToday />
    </div>
  );
}
