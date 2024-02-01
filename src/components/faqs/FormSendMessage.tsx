'use client';
import { Button, Form, Input } from 'antd';
import React from 'react';
const { TextArea } = Input;
export const FormSendMessage = () => {
  return (
    <div className="w-full h-[930px] relative bg-white rounded-[10px] grid grid-cols-2 items-center justify-center px-[104px]">
      <div className="flex flex-col items-center justify-center gap-[64px]">
        <div className="w-[540px] text-stone-800 text-8xl font-semibold font-['Spectral'] leading-[103.22px]">
          Send us a Message!
        </div>
        <div className="w-[523px] text-stone-800 text-2xl font-normal font-['Lexend'] leading-relaxed">
          Have a question or comment? Fill out this form and we will message you
          back as soon as we can.{' '}
        </div>
        <div className="w-[523px] text-stone-800 text-xl font-light font-['Lexend'] leading-7">
          Happier Me Co., Ltd.
          <br />
          98 Road B2, Tay Thanh, Tan Phu, HCMC - MSDN 0317411513
          <br />
          Department of Planning and Investment of HCMC
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Form
          layout="vertical"
          className="w-[547px] flex flex-col gap-[32px]">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input
              className="border border-[#333] rounded-[10px] w-full h-[64px] px-[24px]"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!' }]}>
            <Input
              className="border border-[#333] rounded-[10px] w-full h-[64px] px-[24px]"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input
              className="border border-[#333] rounded-[10px] w-full h-[64px] px-[24px]"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message">
            <TextArea className="border border-[#333] rounded-[10px] w-full h-[217px] p-[24px]" />
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
  );
};
