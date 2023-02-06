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

// POST BLOG DATA TO FİRESTORE //
export const postBlog = async (context, blogData) => {
  console.log("portData data active")
  let id = blogData.blogId


  // var ekle = {} ;
  //     ekle[id] = blogData;
  await db.collection("Blog").doc(id).set(blogData)
  // await db.collection("Blog").doc("1642441437113").delete();
};

export const postPortfolio = async (context, portfolioData) => {
  console.log("postPortfolio data active");
  let id = Date.now().toString();
  // let id = Date.now().toString();
  // var ekle = {};
  // ekle[id] = portfolioData;
  await db.collection("Portfolio").doc(id).set(portfolioData)
  // await db.collection("Portfolio").doc("Mehmet").delete();
}

export const DOWNLOADED_CV = async (context, cv_data) => {
  console.log("cv data active");
  let id = Date.now().toString();
  await db.collection("CV-INFOS").doc(id).set(cv_data)
}

export const sendMail = async (context, mailData) => {
  console.log("sendMail aktif edildi");
  let id = Date.now().toString();
  await db.collection("Mail").doc(id).set(mailData)
}