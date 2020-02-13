<template>
  <div class="dashboard">
    <h1>Home </h1>
    <cards />
  </div>
</template>

<script>
import Cards from './Cards'

export default {
  name: 'dashboard',
  components: {
    Cards,
  },
  methods: {
    addAddressToMap ({ city, country }) {
      this.$refs.dashboardMap.addAddress({ city: city.text, country })
    },
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
