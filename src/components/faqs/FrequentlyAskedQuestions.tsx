import React from 'react';

export const FrequentlyAskedQuestions = () => {
  return (
    <div className="w-full h-[2088px] px-[122px] pt-[113px] pb-[99px] bg-white flex-col justify-center items-center gap-[75px] inline-flex">
      <div className="w-[1202px] h-[94px] text-center text-stone-800 text-8xl font-semibold font-['Spectral']">
        Frequently Asked Questions
      </div>
      <div className="h-[1707px] px-[50px] pt-[54px] pb-[82px] bg-pink-100 rounded-[30px] flex-col justify-center items-start gap-2.5 flex">
        <div className="w-[1087px] h-[194px] relative">
          <div className="w-[860px] h-[41px] left-[38px] top-[41px] absolute text-black text-3xl font-semibold font-['Spectral']">
            Why can’t I just buy one Wellbeing journal?
          </div>
          <div className="w-[1054px] h-[90px] left-[33px] top-[82px] absolute text-black text-2xl font-light font-['Lexend']">
            The notebook consists of 2 seamless volumes, a product that is
            separated into 2 so that the notebook is not too thick, which can
            make writing difficult. So using only 1 book makes your experience
            incomplete.
            <br />
          </div>
        </div>
        <div className="pl-[33px] pt-[41px] pb-[25px] flex-col justify-end items-end flex">
          <div className="w-[1049px] h-[41px] text-black text-3xl font-semibold font-['Spectral']">
            What are the costs & shipping times for A Happier Me?
            <br />
          </div>
          <div className="w-[1054px] h-[120px] text-black text-2xl font-light font-['Lexend']">
            A Happier Me is offering free shipping nationwide for orders worth
            from 280,000 VND.
            <br />
            If you place an order at A Happier Me is a website, you will receive
            the book after 1-2 days for the Ho Chi Minh City area and 2-6 days
            for other areas. Remote areas may take an additional 2-3 days.
            <br />
          </div>
        </div>
        <div className="w-[1087px] h-[164px] relative">
          <div className="w-[860px] h-[41px] left-[38px] top-[41px] absolute text-black text-3xl font-semibold font-['Spectral']">
            Can I purchase the journal in large quantities?
          </div>
          <div className="w-[1054px] left-[33px] top-[82px] absolute text-black text-2xl font-light font-['Lexend']">
            Happier Me has preferential policies for large orders. Please email
            ahappiermejournal@gmail.com to discuss further.
            <br />
          </div>
        </div>
        <div className="w-[1087px] h-[164px] relative">
          <div className="w-[860px] h-[41px] left-[38px] top-[41px] absolute text-black text-3xl font-semibold font-['Spectral']">
            Do I need to answer the Wellbeing Journal questions in order?
          </div>
          <div className="w-[1054px] h-[90px] left-[33px] top-[82px] absolute text-black text-2xl font-light font-['Lexend']">
            Topics are arranged in a deliberate order, but there are no rules
            for writing a diary. Choose what works best for you, but do exercise
            1 first and exercise 2 later.
          </div>
        </div>
        <div className="w-[1087px] h-[220px] relative">
          <div className="w-[860px] h-[41px] left-[38px] top-[41px] absolute text-black text-3xl font-semibold font-['Spectral']">
            What time of day is best for me to write?
            <br />
          </div>
          <div className="w-[1054px] h-[138px] left-[33px] top-[82px] absolute text-black text-2xl font-light font-['Lexend']">
            Any time that suits your life. When starting out, you can try
            journaling at different times of the week, in the morning before
            starting the day, during your lunch break, or before going to bed.
            Once you find a time that feels best, stick to it to help you get
            into a routine and understand when you get the most benefit from
            writing down your thoughts and feelings.
            <br />
          </div>
        </div>
        <div className="w-[1087px] h-[322px] relative">
          <div className="w-[860px] h-[41px] left-[38px] top-[41px] absolute text-black text-3xl font-semibold font-['Spectral']">
            I can not think of anything to write.
            <br />
          </div>
          <div className="w-[1054px] h-60 left-[33px] top-[82px] absolute text-black text-2xl font-light font-['Lexend']">
            Don not worry, this will happen at some point. On days when you do
            not feel like doing self-inquiry, just check in with yourself,
            identify your emotions, pay attention to your needs, and practice
            gratitude. Never force yourself to write. Just note down your
            feelings that day to understand why you can not or do not want to
            write. This will be helpful when you will review the exercises at
            another time. And give yourself a break.
            <br />
            <br />
            However, do not avoid difficult questions. Take time to reflect and
            dig deeper into the reasons behind your emotions whenever possible.
            <br />
          </div>
        </div>
        <div className="pl-[33px] pt-[41px] flex-col justify-end items-center flex">
          <div className="w-[1046px] h-[41px]">
            <span className="text-black text-3xl font-semibold font-['Spectral']">
              I have finished writing my notebook, what should I do to keep
              writing?
              <br />
            </span>
            <span className="text-black text-3xl font-semibold font-['Spectral']">
              <br />
            </span>
          </div>
          <div className="w-[1054px] h-[138px]">
            <span className="text-black text-2xl font-light font-['Lexend']">
              You can join the A Happier Me community at{' '}
            </span>
            <span className="text-black text-2xl font-light font-['Lexend'] underline">
              Happijournaling - Happiness notebook
            </span>
            <span className="text-black text-2xl font-light font-['Lexend']">
              {' '}
              during and after journaling to share with other A Happier Me
              writers, as well as receive more information, articles, and videos
              related to this topic. Personal development and writing challenges
              from A Happier Me to help you stay inspired to write.
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
