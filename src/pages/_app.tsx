import React from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '../components/ErrorBoundary';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <CopilotKit publicApiKey="ck_pub_b48dfc7280fc269b6ac10ab543ffc61d">
        <Component {...pageProps} />
      </CopilotKit>
    </ErrorBoundary>
  );
}

export default MyApp;
