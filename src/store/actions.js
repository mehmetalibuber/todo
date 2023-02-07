import firebase from '../firebase/firebase'
let db = firebase.db;

// GET BLOG DATA FROM FİRESTORE //
export const getBlogData = async (context) => {
  const blogData = [];
  await db
    .collection("Blog")
    .get()
    .then((result) => {
      result.forEach((doc) => {
        blogData.push(doc.data())
      });
      context.commit('blogMutation', blogData)
    })
    .catch((err) => {
      alert("getBlogData" + err);
    });
}

