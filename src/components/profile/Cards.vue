<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <!-- eslint-disable vue/valid-v-for -->
      <template v-for="loop in listLoops">
        <div class="flex xs12 sm6 lg4 xl6" :key="loop + '-5'">
          <va-card
            image="https://picsum.photos/300/200/?image=1043"
            :title="$t('cards.title.name')"
          >
            {{ $t('cards.contentText') }}

          </va-card>

        </div>

      </template>
    </div>
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
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
  }
}
</style>
