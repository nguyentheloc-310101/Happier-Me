import {
  HeroLandingPage,
  WhatWeOffer,
  GuideLines,
  SignUpToday,
} from '@/components/home';
import { Footer } from '@/components/layout/Footer';
import { NavBar } from '@/components/layout/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroLandingPage />
      <div className="mt-[136px]">
        <WhatWeOffer />
      </div>
      <div className="p-[96px]">
        <GuideLines />
      </div>
      <SignUpToday />
      <Footer />
    </>
  );
}
