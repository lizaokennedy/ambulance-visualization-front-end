<template>
  <v-card>
    <v-card-title
      class="headline font-weight-bold"
      :class="color"
    >
      {{ data }} <span
        class="font-weight-light ml-1"
        style="color: grey; font-size: 18px"
      > {{ extra }} </span>
    </v-card-title>
    <v-card-subtitle class="font-weight-light">
      {{ title }}
    </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#68B0AB'
    },
    data: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
