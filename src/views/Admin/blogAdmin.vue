<template>
  <div>
    <div class="container pt-5 pb-5">
      <AdminController />
      <div class="section-title">
        <p>My BLOG List</p>
      </div>
      <div class="my-5 text-center">
        <button @click="showModal = true" class="btn btn-outline-primary mb-5">
          Blog Ekle
        </button>

        <form v-if="showModal == true" v-on:submit="createBlog">
          <div>
            <div class="mb-3">
              <label for="validationTextarea" class="form-label"
                >Lets Post A Blog</label
              >
              <textarea
                class="form-control"
                id="baslik"
                placeholder="Please enter a title"
                v-model="newBlog.blogTitle"
              ></textarea>
              <VueEditor v-model="newBlog.blogDescription" />
              <div class="input-group mt-2">
                <span class="text-center d-flex align-items-center"
                  >Blog Resmi Seçin:&nbsp;</span
                >
                <input
                  class="form-control"
                  v-on:change="handleFile"
                  type="file"
                  accept="*/png, */jpg"
                />
                <div class="text-left mt-2 pt-2">
                  <img
                    class="img-thumbnail w-25"
                    :src="newBlog.blogImage"
                    alt="blogImage"
                  />
                </div>
              </div>
            </div>
            <div class="mt-3 mb-3">
              <button type="submit" class="btn btn-outline-primary">
                Paylaş
              </button>
              <button
                @click="showModal = false"
                class="btn btn-outline-warning ml-1"
              >
                Kapat
              </button>
            </div>

            <span>{{ this.progres }}</span>
          </div>
        </form>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Blog" :key="item.blogId">
              <td>{{ item.blogTitle }}</td>
              <td>
                <i @click="updateBlog(item)" class="fa fa-pen-to-square"></i>
              </td>
              <td><i class="fa fa-trash"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Scroll />
    </div>
  </div>
</template>

<script>
import AdminController from "@/components/AdminController.vue";
import firebase from "../../firebase/firebase";
import Scroll from "../../components/ScrollToTop.vue";
let db = firebase.db;
let storage = firebase.storage;
export default {
  name: "BlogAdmin",
  data() {
    return {
      showModal: false,
      Blog: [],
      newBlog: {
        blogTitle: "",
        blogDescription: "",
        blogImage: "",
      },
    };
  },
  components: {
    Scroll,
    AdminController,
  },
  async created() {
    await db
      .collection("Blog")
      .get()
      .then((result) => {
        result.forEach((doc) => {
          const data = doc.data();

          this.Blog.push(data);
          this.Blog.sort(function (a, b) {
            return b.blogId - a.blogId;
          });
        });
      })
      .catch((err) => {
        alert("getBlogData" + err);
      });
  },
  methods: {
    // selected file including
    handleFile(e) {
      this.newBlog.blogImage = e.target.files[0];
    },
    // Handle file upload
    async handleFileUpload(file) {
      let d;
      const storageRef = storage.ref("Blog");
      const storageChild = storageRef.child(file.name);
      const postblogImage = storageChild.put(file);
      await new Promise((resolve) => {
        postblogImage.on(
          "state_changed",
          (snapshot) => {
            let progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.progres = Math.trunc(progress);
          },
          (error) => {
            console.log(error);
          },
          async () => {
            const downloadUrl = await storageChild.getDownloadURL();
            d = downloadUrl;
            resolve();
          }
        );
      });
      return d;
    },
    async createBlog(e) {
      e.preventDefault();
      // let id = Date.now().toString();
      let id = this.newBlog.blogTitle;
      let url = await this.handleFileUpload(this.newBlog.blogImage);
      let fileRef = await firebase.storage.refFromURL(url);
      let lowerUrl = id.toLowerCase();
      console.log(lowerUrl);
      String.prototype.turkishtoEnglish = function () {
        return this.replace("Ğ", "g")
          .replace("ı", "i")
          .replace("Ü", "u")
          .replace("Ş", "s")
          .replace("I", "i")
          .replace("İ", "i")
          .replace("Ö", "o")
          .replace("Ç", "c")
          .replace("ğ", "g")
          .replace("ü", "u")
          .replace("ş", "s")
          .replace("ö", "o")
          .replace("ç", "c");
      };
      console.log(lowerUrl.turkishtoEnglish());
      let text = "";
      for (const harf of lowerUrl) {
        text += harf
          .split("ı")
          .join("i")
          .split("İ")
          .join("I")
          .split("?")
          .join("")
          .toLowerCase()
          .replace("ğ", "g")
          .replace("ç", "c")
          .replace("ü", "u")
          .replace("ö", "o")
          .replace("ş", "s");
      }
      console.log(text);
      let trim = text.trim();
      let newText = trim.split(" ").join("-");
      console.log(newText);
      const blog = {
        blogTitle: this.newBlog.blogTitle,
        blogDescription: this.newBlog.blogDescription,
        blogImage: url,
        fileref: fileRef.fullPath,
        blogId: newText,
      };
      // await this.$store.dispatch("postBlog", blog);
      await db.collection("Blog").doc(newText).set(blog);
      this.newBlog = {};
      //await db.collection("Blog").doc("123456").delete();
    },
    async updateBlog(blog) {
      this.showModal = true;
      this.newBlog = blog;
      let profilImage = blog.blogImage;
      if (
        profilImage == null ||
        profilImage == undefined ||
        profilImage == ""
      ) {
        alert("please image select");
      } else {
        let id = blog.blogId;
        const updateBlog = {
          blogTitle: this.newBlog.blogTitle,
          blogDescription: this.newBlog.blogDescription,
          blogImage: blog.blogImage,
          fileref: blog.fileref,
          blogId: blog.blogId,
        };
        await db.collection("Blog").doc(id).update(updateBlog);
      }
    },
  },
};
</script>

 <style>
.fa:hover {
  cursor: pointer;
}
</style>