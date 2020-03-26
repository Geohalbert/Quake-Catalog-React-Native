const functions = require("firebase-functions");
const admin = require("./admin");

module.exports = functions.auth.user().onCreate(user => {
  const { uid, email } = user;
  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .set({
      email: email && email.toLowerCase ? email.toLowerCase() : email,
      uid: uid,
      createdAt: new Date().getTime()
    })
    .catch(e => {
      console.log(e);
      console.log("There was an error sending welcome email to " + user.email);
    });
});
