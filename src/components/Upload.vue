<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to ほっとここあ</h1>

        <p class="subheading font-weight-regular">
          あああああああああああああああああああああ,
          <br />なんかいい感じの説明
          <a href="https://youtu.be/r78ZX-_fDds" target="_blank"
            >なんかいい感じのリンク</a
          >
        </p>
      </v-col>

      <v-col cols="12">
        <v-form
          action="/"
          method="post"
          enctype="multipart/form-data"
        >
          <v-text-field
            name="title"
            label="title"
          />
          <v-text-field
            name="episode"
            label="episode"
          />
          <v-text-field
            name="subtitle"
            label="subtitle"
          />
          <v-file-input
            @change="changeBMP"
            @click:clear="pictures.splice(0)"
            accept="image/*"
            truncate-length="15"
            name="file"
            label="files"
            multiple
            show-size
          />
          <v-btn
            type="submit"
            color="primary"
            block
            depressed>
            UPLOAD
          </v-btn>
        </v-form>
      </v-col>
      <v-row>
        <v-col
          v-for="(picture, index) in pictures"
          :key="index"
          class="d-flex child-flex"
          cols="4" >
          <v-img :src="picture" />
        </v-col>
      </v-row>
      <!-- <v-col cols="12">
        <v-file-input
          @change="changePDF"
          accept=".pdf"
          truncate-length="15"
        />
      </v-col>


      <canvas ref="canvas" /> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      pictures: []
    };
  },
  methods: {
    // https://qiita.com/itoshiki/items/511d58b827f4ce2129fc
    async changeBMP(files) {
      // this.picture = await this.getBase64(files[0])
      for (let i = 0; i < files.length; i++) {
        const picture = await this.getBase64(files[i]);
        this.pictures.push(picture);
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }
  }
};
</script>
