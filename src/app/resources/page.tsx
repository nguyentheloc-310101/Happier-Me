'use client';

import { HeroSectionResources, VideoSection } from '@/components/resources';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSectionResources />
      <VideoSection />
    </>
  );
}
