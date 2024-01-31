import React from 'react';

export const SignUpToday = () => {
  return (
    <div className="w-full h-[802px] px-16 pt-12 pb-16 bg-teal-800 justify-between items-end inline-flex">
      <div className="w-[596px] self-stretch flex-col justify-end items-end gap-24 inline-flex">
        <div className="self-stretch h-[453px] flex-col justify-start items-start gap-16 flex">
          <div className="self-stretch text-white text-[144px] font-semibold font-['Spectral'] leading-[152px]">
            Sign up today!
          </div>
          <div className="self-stretch text-white text-[32px] font-normal font-['Lexend']">
            Ready to start taking care of your wellbeing and promoting wellness?
            We are happy to have you! Click the button below to create an
            account.
          </div>
        </div>
        <div className="px-10 py-6 bg-pink-50 rounded-[45px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-teal-800 text-[40px] font-semibold font-['Lexend'] leading-10">
            Lets go →
          </div>
        </div>
      </div>
      <div className="w-[672.38px] h-[672.13px] relative">
        <div className="w-[168.13px] h-[168.13px] left-[504px] top-[504px] absolute bg-amber-400 rounded-full" />
        <img
          className="w-[168.13px] h-[168.13px] left-0 top-0 absolute rounded-full"
          src="https://ucarecdn.com/d2c5af48-7a3e-480f-a79a-2ced1fe39e68/-/format/auto/-/quality/smart_retina/"
        />

        <div className="w-[168.13px] h-[168.13px] left-[336px] top-[168px] absolute bg-pink-50 rounded-full" />
        <img
          className="w-[168.13px] h-[168.13px] left-[336px] top-[504px] absolute rounded-full"
          src="https://ucarecdn.com/68c51835-6126-46f9-beb8-0f38bc22079f/-/scale_crop/300x300/-/format/auto/-/quality/smart_retina/"
        />
        <div className="w-[168.13px] h-[168.13px] left-0 top-[336px] absolute bg-rose-300 rounded-full" />
      </div>
    </div>
  );
};
