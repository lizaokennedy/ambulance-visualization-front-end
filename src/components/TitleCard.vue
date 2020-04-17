<template>
  <v-card outlined>
    <v-list-item two-line>
      <v-list-item-content>
        <v-container>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t(title) }}
          </v-list-item-title>
          <router-link :to="link">
            <v-icon>{{ icon }}</v-icon>
          </router-link>
        </v-container>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '../i18n'

export default Vue.extend({
  name: 'TitleCard',
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  data: () => ({})
})
</script>
