<template>
  <div class="dashboard">
    <h1>Region</h1>
    <div class="mx-1 pa-1"></div>
    <tree-view-basic-preview />

  </div>
</template>

<script>
import TreeViewBasicPreview from './TreeViewBasicPreview'

export default {
  name: 'dashboard',
  components: {
    TreeViewBasicPreview,
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
