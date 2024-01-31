import {
  FormSendMessage,
  FrequentlyAskedQuestions,
  HeroSectionFaqs,
} from '@/components/faqs';
import React from 'react';

const QAPage = () => {
  return (
    <>
      <HeroSectionFaqs />
      <FrequentlyAskedQuestions />
      <FormSendMessage />
    </>
  );
};

export default QAPage;
