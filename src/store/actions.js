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
      //  console.log(data);
    })
    .catch((err) => {
      alert("comingUsersData" + err);
    });
}
export const ADD_TODO = async (context, payload) => {
  var todos = {};
  todos[payload.todoId] = payload;
  let dcm = db.collection("Todos")
    .doc(context.state.userUid);
  var setWithMerge = await dcm.set({
    todos
  }, {
    merge: true
  });
  console.log(setWithMerge);
}
export const GET_USER_TODOS = async (context) => {
  await db
    .collection("Todos")
    .doc(context.state.userUid)
    .get()
    .then((result) => {
      let data = result.data();
      console.log(data);
      context.commit('userTodosMutation', data)
    })
    .catch((err) => {
      alert("comingUserTodosData" + err);
    });
}
export const DELETE_TODO = async (context, payload) => {
  var sil = {};
  sil["todos" + payload.todoId] = firebase.firebase.firestore.FieldValue.delete();
  console.log(sil);
  db
    .collection("Todos")
    .doc(context.state.userUid)
    .update(sil);
}