<template>
  <div class="container pt-5 pb-5">
    <AdminController />

    <div class="d-flex align-items-start">
      <div
        class="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Site Genel Bilgiler
        </button>
        <button
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Blog Bölümü
        </button>
        <button
          class="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Tarihçe
        </button>
        <button
          class="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Portfolio
        </button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <!-- THIS SECTION IS General START -->

        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <form @submit.prevent="pressed">
            <div class="mt-2">
              <input
                class="input"
                type="text"
                placeholder="title"
                v-model="siteBilgileri.title"
              />
            </div>
            <div class="mt-2">
              <input
                class="input"
                type="text"
                placeholder="phone"
                v-model="siteBilgileri.telefon"
              />
            </div>
            <div class="mt-2">
              <input
                class="input"
                type="text"
                placeholder="mail"
                v-model="siteBilgileri.mail"
              />
            </div>
            <div class="mt-2">
              <input
                class="input"
                type="text"
                placeholder="address"
                v-model="siteBilgileri.adres"
              />
            </div>

            <button class="btn btn-outline-primary p-2 mt-3">Güncelle</button>
          </form>

          <div class="mt-3">
            <button class="btn btn-secondary" @click="onUpload">Upload</button>
            <input class="form-control" type="file" @change="changeLogo" />
          </div>
        </div>

        <!-- THIS SECTION IS General End -->

        <!-- THIS SECTION IS BLOG START -->
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <form v-on:submit="createBlog">
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
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Blog Ekle
              </button>
              <span>{{ this.progres }}</span>
            </div>
          </form>
          

          <!-- blog list -->
          
        </div>

        <!-- THIS SECTION IS BLOG END -->






        <div
          class="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
        >
          free section :))
        </div>

        <!-- THIS SECTION IS Portfolio Start -->

        <div
          class="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
        >
          <form v-on:submit="imageAdd">
            <div>
              <div class="mb-3">
                <div class="input-group mt-2">
                  <span class="text-center d-flex align-items-center">
                    Resmi Seçin:&nbsp;</span
                  ><input
                    class="form-control"
                    v-on:change="handleFile"
                    type="file"
                  />
                </div>
              </div>
              <button class="btn btn-outline-primary">Ekle</button>
              <span>{{ this.progres }}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
   
   

  </div>
</template>

<script>
import firebase from "../../firebase/firebase";
let db = firebase.db;
let storage = firebase.storage;
import AdminController from "@/components/AdminController.vue";

export default {
  data() {
    return {
      Blog: [],
      siteBilgileri: {
        title: "",
        telefon: "",
        mail: "",
        adres: "",
        baslik: "",
        logo: "",
      },
      newBlog: {
        blogTitle: "",
        blogDescription: "",
        blogImage: "",
      },
      content: "",

      progres: "",
      Portfolio: {
        portImage: "",
      },
    };
  },
  components: {
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
          console.log(this.Blog);
        });
      })
      .catch((err) => {
        alert("getBlogData" + err);
      });
  },

  methods: {

    async pressed() {
      var title = this.siteBilgileri.title;
      if (title == "" || title == null) {
        alert("Başlık Alanı Boş Olamaz!");
      } else {
        await db
          .collection("Title")
          .doc("mehmet")
          .set({
            title: title,
            telefon: this.siteBilgileri.telefon,
            mail: this.siteBilgileri.mail,
            adres: this.siteBilgileri.adres,
          })
          .then(() => {
            console.log("document succesfully written!");
          })
          .catch((error) => {
            alert(error);
          });
      }
    },
    async createBlog(e) {
      e.preventDefault();
      let id = Date.now().toString();
      let url = await this.handleFileUpload(this.newBlog.blogImage);
      let fileRef = await firebase.storage.refFromURL(url);
      const blog = {
        blogTitle: this.newBlog.blogTitle,
        blogDescription: this.newBlog.blogDescription,
        blogImage: url,
        fileref: fileRef.fullPath,
        blogId: id,
      };
      await this.$store.dispatch("postBlog", blog);
      this.newBlog = {};
    },
    handleFile(e) {
      this.newBlog.blogImage = e.target.files[0];
      this.Portfolio.portImage = e.target.files[0];
    },
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
    async handleFileUploadPortfolio(file) {
      let d;
      const storageRef = storage.ref("Portfolio");
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
    async imageAdd(e) {
      e.preventDefault();
      let id = Date.now().toString();
      let url = await this.handleFileUploadPortfolio(this.Portfolio.portImage);
      let fileRef = await firebase.storage.refFromURL(url);
      const portfolio = {
        portImage: url,
        fileref: fileRef.fullPath,
        portId: id,
      };
      await this.$store.dispatch("postPortfolio", portfolio);
    },
  },
};
</script>

<style>
</style>