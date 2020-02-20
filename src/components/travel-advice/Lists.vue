<template>
  <div class="lists">
    <div class="row">
      <div class="flex xs12 lg6">

        <va-list fit>
          <va-list-label>
            {{ $t('lists.routerSupport') }}
          </va-list-label>

          <va-item :to="{ name: 'google-maps' }">
            <va-item-section side>
              <va-icon name="fa fa-google" color="red" />
            </va-item-section>

            <va-item-section>
              <va-item-label>Google Maps</va-item-label>
            </va-item-section>
          </va-item>

          <va-item :to="{ name: 'yandex-maps' }">
            <va-item-section side>
              <va-icon name="fa fa-map" color="red" />
            </va-item-section>

            <va-item-section>
              <va-item-label>Yandex Maps</va-item-label>
            </va-item-section>
          </va-item>

          <va-item :to="{ name: 'leaflet-maps' }">
            <va-item-section side>
              <va-icon name="fa fa-map-marker" color="red" />
            </va-item-section>

            <va-item-section>
              <va-item-label>Leaflet Maps</va-item-label>
            </va-item-section>
          </va-item>
        </va-list>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.json'

export default {
  name: 'lists',
  data () {
    return {
      customers: data.slice(0, 5),
      archived: data.slice(5, 8),
      appBanners: false,
      banners: false,
      notifications: true,
    }
  },
  methods: {
    getGenderIcon (gender) {
      return gender === 'male' ? 'fa fa-mars' : 'fa fa-venus'
    },
    getGenderColor (gender) {
      return gender === 'male' ? 'blue' : 'pink'
    },
    notify (name) {
      this.showToast(`Clicked ${name}`, {
        position: 'bottom-right',
      })
    },
    toggleStar (customer) {
      customer.starred = !customer.starred
    },
  },
}
</script>
