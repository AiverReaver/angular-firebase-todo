import * as functions from 'firebase-functions';

export const sharing = functions.https.onRequest((req, res) => {
  const InvitationToken = req.query.InvitationToken;

  res.send(`Hello ${InvitationToken}`);
});
