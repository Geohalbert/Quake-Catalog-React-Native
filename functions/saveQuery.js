const functions = require("firebase-functions");
const admin = require("./admin");

module.exports = functions.https.onRequest(async (req, res) => {
  const quakes = req.quakes;
  const uid = req.uid;
  const time = new Date().getTime();
  const userRef = admin
    .firestore()
    .collection("queries")
    .doc(uid);

  try {
    userRef.update({
      quakes,
      updatedAt: time
    });
    res.json({ result: `Query with ID: ${addQuery.id} added.` });
  } catch (e) {
    userRef.set({ quakes, createdAt: time, updatedAt: time });
    console.error(e.result);
  }
});
