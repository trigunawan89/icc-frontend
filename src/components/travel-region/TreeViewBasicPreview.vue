<template>
  <va-tree-root>
    <va-tree-category label="Region">
      <va-tree-category label="Country">
        <va-tree-category label="Overview">
          <va-tree-node>Risk Rating</va-tree-node>
          <va-tree-node>Risk Summary</va-tree-node>
          <va-tree-node>Alert</va-tree-node>
        </va-tree-category>
        <va-tree-category label="Security">
          <va-tree-node>Summary</va-tree-node>
          <va-tree-node>Personal Risk</va-tree-node>
          <va-tree-node>Country Stability</va-tree-node>
        </va-tree-category>
        <va-tree-category label="Medical">
          <va-tree-node>Before You Go</va-tree-node>
          <va-tree-node>Standard of Care </va-tree-node>
          <va-tree-node>Clinics &amp; Hospitals</va-tree-node>
          <va-tree-node>Foods &amp; Water</va-tree-node>
          <va-tree-node>Health Threats</va-tree-node>
        </va-tree-category>
        <va-tree-category label="Travel">
          <va-tree-node>Getting There</va-tree-node>
          <va-tree-node>Getting Around</va-tree-node>
          <va-tree-node>Language &amp; Money</va-tree-node>
          <va-tree-node>Cultural Tips</va-tree-node>
          <va-tree-node>Phone &amp; Power</va-tree-node>
          <va-tree-node>Geography &amp; Weather</va-tree-node>
        </va-tree-category>
        <va-tree-node>Calendar</va-tree-node>
        <va-tree-node>Map</va-tree-node>
      </va-tree-category>
    </va-tree-category>
  </va-tree-root>
</template>

<script>
export default {
  name: 'tree-view-basic-preview',
}
</script>
