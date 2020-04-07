const functions = require("firebase-functions");
const admin = require("./admin");

module.exports = functions.https.onRequest(async (req, res) => {
  const { quakes, uid } = req;
  const time = new Date().getTime();
  const userRef = admin
    .firestore()
    .collection("queries")
    .doc(uid);

  try {
    console.log(`trying to update`);
    userRef.update({
      quakes: quakes,
      updatedAt: time
    });
    res.json({ result: `Query with ID: ${addQuery.id} added.` });
  } catch (e) {
    console.log(`catch error`);
    userRef.set({ quakes: quakes, createdAt: time, updatedAt: time });
    console.error(e.result);
  }
});
