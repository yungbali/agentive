import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'musicfiles',
  access: (allow) => ({
    'private/${cognito-identity.amazonaws.com:sub}/*': [
      allow.authenticated.to(['read', 'write', 'delete'])
    ],
    'protected/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.guest.to(['read'])
    ],
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete'])
    ]
  })
}); 