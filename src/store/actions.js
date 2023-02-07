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
export const GET_USER_DATA = async (context) => {
  const comingUsersData = [];
  await db
    .collection("Users")
    .get()
    .then((result) => {
      result.forEach((doc) => {
        comingUsersData.push(doc.data())
      });
      context.commit('userMutation', comingUsersData)
    })
    .catch((err) => {
      alert("getKeywordsData" + err);
    });
}