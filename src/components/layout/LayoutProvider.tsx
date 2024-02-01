'use client';
import { ReactNode, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import themeConfig from '@/utils/theme/theme-config';
import * as NProgress from 'nprogress';
import { usePathname, useSearchParams } from 'next/navigation';
import AntdStyledRegistry from '@/utils/theme/antd-styled-rehistry';

type Props = {
  children: ReactNode;
};

export default function LayoutProvider({ children }: Props) {
  return (
    <ConfigProvider theme={themeConfig}>
      <AntdStyledRegistry>{children}</AntdStyledRegistry>
    </ConfigProvider>
  );
}
