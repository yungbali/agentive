import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../aws-config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          {user && (
            <div className="p-4 bg-white shadow-sm flex justify-between items-center">
              <span>Welcome, {user.username}</span>
              <button
                onClick={signOut}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
              >
                Sign Out
              </button>
            </div>
          )}
          <Component {...pageProps} />
        </div>
      )}
    </Authenticator>
  );
}

export default MyApp;
