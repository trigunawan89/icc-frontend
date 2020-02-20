<template>
  <div class="dashboard">
    <h1>Travel Advice</h1>
    <div class="mx-1 pa-1"></div>
    <lists />

  </div>
</template>

<script>
import Lists from './Lists'

export default {
  name: 'dashboard',
  components: {
    Lists,
  },

}
</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }

  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
    }
  }
</style>
