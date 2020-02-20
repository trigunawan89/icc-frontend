<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template v-for="loop in listLoops">
        <div class="flex xs12 sm6 lg4 xl6" :key="loop + '-5'">
          <va-card
            image="https://picsum.photos/300/200/?image=1043"
            :title="$t('cards.title.withImage')"
          >
            {{ $t('cards.contentText') }}
            <va-button :to="{ name: 'post' }">
              Read More
            </va-button>
          </va-card>

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
export default {
  name: 'cards',
  data () {
    return {
      listLoops: 1,
      counter: 1,
      isLoading: false,
    }
  },
  methods: {
    addCards () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        ++this.listLoops
      }, 1000)
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
