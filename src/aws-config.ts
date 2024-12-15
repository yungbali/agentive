import { Amplify } from 'aws-amplify';

// Try to load config from different sources
let authConfig;
try {
  // First try to load from amplify-generated config
  const config = require('../amplifyconfiguration.json');
  authConfig = config.aws_cognito_identity_pool_id ? {
    userPoolId: config.aws_user_pools_id,
    userPoolWebClientId: config.aws_user_pools_web_client_id,
    identityPoolId: config.aws_cognito_identity_pool_id,
  } : require('../amplify_outputs.json').auth;
} catch (e) {
  console.log('Using environment variables for Auth configuration');
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

export default Amplify; 