import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

export const createInvitation = functions.https.onCall(
  async (data: any, context: any) => {
    return data;
  }
);
