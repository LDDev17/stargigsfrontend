import { referenceAuth } from'@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'us-east-1_W2rP8PIIO',
  identityPoolId: 'us-east-1:7f90642f-bd21-4d2c-a5bd-874189c8aa47',
  authRoleArn: 'arn:aws:iam::937743225370:role/amplify-stargigs-patri-sa-amplifyAuthauthenticatedU-bzSQjeqLVjGT',
  unauthRoleArn: 'arn:aws:iam::937743225370:role/amplify-stargigs-patri-sa-amplifyAuthunauthenticate-o30RwO66YWH4',
  userPoolClientId: '46js127q40d9tk27gppou6qfe9',
})