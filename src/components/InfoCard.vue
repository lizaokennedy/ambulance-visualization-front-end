<template>
  <v-card>
    <v-card-title
      class="headline font-weight-bold"
      :class="color"
    >
      {{ data }}
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
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
// <v-container>
//       <v-row>
//         <v-col>
//           <v-card-text class="font-weight-light pa-0">
//             {{ title }}
//           </v-card-text>
//         </v-col>
//         <v-col>
//           <v-card-text class="font-weight-light pa-0">
//             {{ data }}
//           </v-card-text>
//         </v-col>
//       </v-row>
//     </v-container>
