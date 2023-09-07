/* eslint-disable max-len */
/* eslint-disable quotes */
const {logger} = require("firebase-functions");

// Dependencies for callable functions.
const {onCall, HttpsError} = require("firebase-functions/v2/https");

// Dependencies for the addMessage function.
const {getFirestore} = require('firebase-admin/firestore');


// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");

initializeApp();
const db = getFirestore();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
// "http://127.0.0.1:5001/quza-app/us-central1"
exports.addmessage = onCall({
  cors: [/firebase\.com$/, "http://localhost:4200", "https://themontired.github.io/quza"],
  enforceAppCheck: true,
  consumeAppCheckToken: true,
  // Consume the token after verification.
},
async (request, response) => {
  response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'style-src-elem'; font-src 'self'; img-src 'self'; frame-src 'self'");
  const docRef = db.collection('message');

  return await docRef.add({
    first: request.data.first,
    last: request.data.last,
    born: request.data.born,
  }).then((res) => {
    logger.info("New Message written");
    // Returning the sanitized message to the client.
    return {"message": "Added document with ID:" + res.id};
  })
      .catch((error) => {
        logger.info(error.message);
        // Re-throwing the error as an HttpsError so that the client gets
        throw new HttpsError("unknown", error.message, error);
      });
});


// exports.requestAuthCode = onRequest(async (req, res) => {
//   return cors(req, res, async () => {
//     res.set("Access-Control-Allow-Origin", "*");

//     if (req.method === "OPTIONS") {
//       // Send response to OPTIONS requests
//       res.set("Access-Control-Allow-Methods", "GET");
//       res.set("Access-Control-Allow-Headers", "Content-Type");
//       res.set("Access-Control-Max-Age", "3600");
//       res.status(204).send("");
//     } else {
//       res.send("Hello World!");
//     }
//     // const clientId = req.data.client_id;
//     // const clientSecret = req.data.client_secret;
//     const payload = {
//       method: "get",
//       url: "https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.H77IMT50EELGM5T4PJSSNBY6WS54TG&scope=ZohoCreator.form.CREATE&redirect_uri=http://localhost:4200/callback",
//       headers: {},
//     };
//     res.status(200).send("Sent");
//     return await axios(payload);
//   });
// });
