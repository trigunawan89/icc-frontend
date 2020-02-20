<template>
  <div class="dashboard">
    <h1>Advisory</h1>
    <div class="mx-1 pa-1"></div>
    <data-table-filter />

  </div>
</template>

<script>
import DataTableFilter from './DataTableFilter'

export default {
  name: 'dashboard',
  components: {
    DataTableFilter,
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
