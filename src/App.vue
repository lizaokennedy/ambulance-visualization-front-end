<template>
  <v-app app>
    <TopBar />
    <SideBar />
    <v-content class="bg">
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "./i18n";
import Vuetify from "./plugins/vuetify";
import router from "./router";
import TopBar from "./components/TopBar.vue";
import SideBar from "./components/SideBar.vue";
import VueRouter from "vue-router";
export default Vue.extend({
  name: "App",
  components: {
    TopBar,
    SideBar
  },
  data() {
    return {};
  }
});
</script>
