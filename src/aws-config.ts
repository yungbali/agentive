import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.auth.user_pool_id,
      userPoolClientId: config.auth.user_pool_client_id,
      identityPoolId: config.auth.identity_pool_id,
      signUpVerificationMethod: 'code',
      loginWith: {
        email: true
      }
    }
  },
  Storage: {
    S3: {
      bucket: config.storage.bucket_name,
      region: config.storage.aws_region
    }
  }
});

export default Amplify; 