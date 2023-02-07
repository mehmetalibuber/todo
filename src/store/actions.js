import firebase from '../firebase/firebase'
let db = firebase.db;

// GET BLOG DATA FROM FİRESTORE //
export const ADD_USER = async (context, payload) => {
  console.log(payload);
  await db
    .collection("Users")
    .doc(payload.uid)
    .set(payload)
}