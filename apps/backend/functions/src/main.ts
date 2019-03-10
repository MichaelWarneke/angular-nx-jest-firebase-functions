import * as functions from 'firebase-functions';

import { server } from '@tabu/backend/api-app';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(
  (request: any, response: any) => {
    response.send('Hello from Firebase!');
  }
);

exports.api = functions.https.onRequest(server);
