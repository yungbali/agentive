import { Amplify } from 'aws-amplify';

// Try to load config from different sources
let authConfig;
try {
  // First try to load from amplify_outputs.json
  const config = require('../amplify_outputs.json');
  authConfig = {
    userPoolId: config.auth.user_pool_id,
    userPoolClientId: config.auth.user_pool_client_id,
    identityPoolId: config.auth.identity_pool_id,
  };
} catch (e) {
  // Fallback to environment variables
  authConfig = {
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
  };
}

Amplify.configure({
  Auth: {
    Cognito: {
      ...authConfig,
      signUpVerificationMethod: 'code',
      loginWith: {
        email: true
      }
    }
  }
}); 