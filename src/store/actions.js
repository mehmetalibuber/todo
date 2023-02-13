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
  await db
    .collection("Users")
    .doc(context.state.userUid)
    .get()
    .then((result) => {
      let data = result.data()
      context.commit('userMutation', data)
      console.log(data);
    })
    .catch((err) => {
      alert("comingUsersData" + err);
    });
}