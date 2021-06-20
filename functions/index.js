const functions = require("firebase-functions");

//  http request 1
exports.randomNumber = functions.https.onCall((data, context) => {
  const number = Math.round(Math.random() * 100);
  return number.toString();
});
