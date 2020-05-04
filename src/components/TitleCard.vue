<template>
  <router-link class="link" :to="link">
    <v-card color="white" outlined flat>
      <v-list-item two-line>
        <v-list-item-content>
          <v-container>
            <v-list-item-subtitle dark class="display-1 font-weight-thin">
              <v-icon color="accent">
                {{ icon }}
              </v-icon>
              {{ $t(title) }}
            </v-list-item-subtitle>
          </v-container>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "../i18n";

export default Vue.extend({
  name: "TitleCard",
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
});
</script>
