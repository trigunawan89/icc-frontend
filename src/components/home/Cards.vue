<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template v-for="page in pages">
        <div class="flex xs12 sm6 lg4 xl6" :key="page + '-5'">
          <va-card
            image="https://picsum.photos/300/200/?image=1043"
            :title="page.title_id"
          >
           <span v-html="page.body_id"> </span>
            <va-button :to="{ name: 'post' }">
              Read More
            </va-button>
          </va-card>
          {{ pages }}
        </div>

      </template>
    </div>

    <va-inner-loading class="flex-center py-3" :loading="isLoading">
      <va-button @click="addCards()">
        Show More
      </va-button>
    </va-inner-loading>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cards',
  data () {
    return {
      listLoops: 1,
      counter: 1,
      isLoading: false,
      pages: [],
      info: null,
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    addCards () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        ++this.listLoops
      }, 1000)
    },
    load () {
      axios
        .get('http://127.0.0.1:8000/api/v2/pages/?type=advisory.AdvisoryPage&fields=date,categories,title,title_id,feed_image,body_en,body_id')
        .then(response => (this.pages = response.data.items))
        .catch(error => console.log(error))
    },
  },
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
  }
}
</style>
