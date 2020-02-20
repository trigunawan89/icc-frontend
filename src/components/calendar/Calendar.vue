<template>
  <div class="timelines">
    <div class="row">

      <div class="flex xs12">
        <va-card no-padding-v :title="$t('timelines.verticalCentered')">
          <va-timeline vertical centered style="min-width: 300px;">
            <va-timeline-item color="danger" active>
              <span
                slot="before"
                class="title title--danger va-timeline-item__text"
                :style="{color: $themes.danger}"
              >
                February 2018
              </span>
              <va-card
                slot="after"
                stripe="danger"
                class="mb-0"
              >
                <template slot="title">{{ titleFirst }}</template>
                {{ contentFirst }}
              </va-card>
            </va-timeline-item>
            <va-timeline-item color="danger" active>
              <span
                slot="before"
                class="title title--danger va-timeline-item__text"
                :style="{color: $themes.danger}"
              >
                April 2018
              </span>
              <va-card
                slot="after"
                stripe="danger"
              >
                <template slot="title">{{ titleSecond }}</template>
                {{ contentFirst }}
              </va-card>
            </va-timeline-item>
            <va-timeline-item color="danger" active>
              <span
                slot="before"
                class="title title--danger va-timeline-item__text"
                :style="{color: $themes.danger}"
              >
                June 2018
              </span>
              <va-card
                slot="after"
                stripe="danger"
                class="mb-0"
              >
                <template slot="title">{{ titleSecond }}</template>
                {{ contentFirst }}
              </va-card>
            </va-timeline-item>
          </va-timeline>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'timelines',
  data () {
    return {
      dateFirst: '',
      titleFirst: 'Make design',
      titleSecond: 'Develop an app',
      titleThird: 'Submit an app',
      horizontalSimpleContentFirst: 'Pre-sail rate: 50%',
      dateSecond: 'May 22 10:00',
      horizontalSimpleContentSecond: 'Pre-sail rate: 40%',
      dateThird: 'July 19 17:45',
      horizontalSimpleContentThird: 'Pre-sail rate: 20%',
      contentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
      contentSecond: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
      contentThird: 'However, various anthropogenic factors have had a severe impact on zebra populations',
    }
  },
}
</script>
