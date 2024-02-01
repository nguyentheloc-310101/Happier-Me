import { Spin } from 'antd';
import React from 'react';

const LoadingPage = () => {
  <div>
    <span className="flex flex-col items-center justify-center h-screen bg-white">
      <Spin size="large" />
    </span>
  </div>;
};

export default LoadingPage;
