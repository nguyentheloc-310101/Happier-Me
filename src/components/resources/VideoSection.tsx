'use client';
import { useState } from 'react';
import { BoxContent } from './items/BoxContent';
import { contentVideoReading } from '@/constant/video-contents-resouces';
import Image from 'next/image';
import { Button, Form, Input } from 'antd';

export const VideoSection = () => {
  const videoLink =
    'https://www.youtube.com/embed/XImlPyZ98x4?si=4YcJktoBChiJZlGG';

  const [description, setDescription] = useState<boolean>(true);
  const [transcript, setTranscript] = useState<boolean>(false);

  const handleClickTranscript = () => {
    setTranscript(true);
    setDescription(false);
  };
  const handleClickDesc = () => {
    setDescription(true);
    setTranscript(false);
  };

  return (
    <div className="w-full h-auto py-16 bg-[#FFFCFE] flex-col justify-start items-start gap-12 inline-flex">
      <div className="self-stretch h-[77px] py-0.5 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-center text-stone-800 text-5xl font-semibold font-['Spectral'] leading-[72px]">
          Understanding Mental Health and Resilience
        </div>
        <div className="self-stretch text-center text-stone-800 text-2xl font-normal font-['Lexend'] leading-[46px]">
          An introductory training video on mental health issues and building
          resilience.
        </div>
      </div>
      <section className="max-w-[360px] md:max-w-[660px] mt-[5px] lg:mt-[30px] lg:max-w-[980px] mx-auto relative  w-full ">
        <div className="pt-[56.25%] relative">
          <iframe
            src={videoLink}
            title="Aura Video"
            className="absolute rounded-[40px] bg-black top-0 left-0 w-full h-full object-contain"
          />
        </div>
      </section>

      <div className="self-stretch h-[146px] px-[87px] flex-col justify-start items-start gap-10 flex">
        <div className="h-[146px] flex-col justify-start items-start gap-6 flex">
          <div className="justify-start items-start inline-flex">
            <div
              className={`px-6 py-3 ${
                description ? 'bg-slate-300' : ''
              } rounded-[45px] justify-center w-fit items-center gap-2.5 flex cursor-pointer`}
              onClick={handleClickDesc}>
              <div className="text-stone-800 text-2xl font-semibold font-['Lexend']">
                Description
              </div>
            </div>
            <div
              className={`px-6 py-3 rounded-[45px]  ${
                transcript ? 'bg-slate-300' : ''
              } justify-center items-center gap-2.5 w-fit flex cursor-pointer`}
              onClick={handleClickTranscript}>
              <div className="text-stone-800 text-2xl font-semibold font-['Lexend']">
                Transcript
              </div>
            </div>
          </div>
          {description && (
            <div className="self-stretch text-justify text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
              In this video, we aim to demystify mental health, unraveling the
              complexities that often shroud this critical aspect of our lives.
              We will explore the spectrum of mental health issues, debunk
              common myths, and emphasize the importance of fostering an
              understanding and compassionate community.
            </div>
          )}
          {transcript && (
            <div className="w-[1210px] text-justify text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
              “Hello everyone! Today, we’ll be talking about mental health and
              resilience. This will serve as the introduction to Happier Me’s
              Wellbeing Circles for new members, so please be sure to pay
              attention! By the end of this video, you’ll have learned about
              mental health issues and how to enhance resilience...”
            </div>
          )}
        </div>
      </div>

      {/*list video*/}
      <div className="mt-[7%] flex flex-wrap items-center justify-center h-auto gap-[32px]">
        {contentVideoReading.map((item, index) => {
          return (
            <div key={index}>
              <BoxContent
                type={item.type as any}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
      </div>

      {/*Form*/}
      <div className="w-full grid grid-cols-2 bg-[#FCF3F8] px-[151px] py-[24px]">
        <div className="w-[438px] h-[707px] flex-col justify-start items-start inline-flex gap-[24px]">
          <div className="w-[438px] text-stone-800 text-8xl font-semibold font-['Spectral']">
            Request a Mentor
          </div>
          <div className="self-stretch text-stone-800 text-2xl font-normal font-['Lexend'] leading-loose">
            Utilize the power of meaningful relationships to shape the future of
            your organization and the people involved.
          </div>
          <Image
            src="https://ucarecdn.com/83e4ceae-4e2e-4eb1-8548-85b4d50f1527/-/quality/smart_retina/-/format/auto/"
            alt=""
            width={334}
            height={438}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Form
            layout="vertical"
            className="w-[547px] flex flex-col gap-[32px]">
            <div className="grid grid-cols-2 gap-[32px]">
              <Form.Item
                label="First name"
                name="Fname"
                rules={[
                  { required: true, message: 'Please input your first name!' },
                ]}>
                <Input
                  className="border border-[#333] rounded-[10px] w-full h-[48px] px-[24px]"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                label="Last name"
                name="Lname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first last name!',
                  },
                ]}>
                <Input
                  className="border border-[#333] rounded-[10px] w-full h-[48px] px-[24px]"
                  size="large"
                />
              </Form.Item>
            </div>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please input your phone!' }]}>
              <Input
                className="border border-[#333] rounded-[10px] w-full h-[48px] px-[24px]"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input
                className="border border-[#333] rounded-[10px] w-full h-[48px] px-[24px]"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Your organization"
              name="organization">
              <Input
                className="border border-[#333] rounded-[10px] w-full h-[48px] px-[24px]"
                size="large"
              />
            </Form.Item>
            <Button
              style={{ backgroundColor: '#333', color: '#fff' }}
              size="large"
              className="w-full text-[white]!"
              htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
