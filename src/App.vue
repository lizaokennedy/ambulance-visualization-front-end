<template>
  <v-app app>
    <TopBar />
    <v-content class="bg">
      <SideBar />
      <router-view />
      <Popup sim-id="hello" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from './components/TopBar.vue'
import SideBar from './components/SideBar.vue'
import Popup from './components/SimCompletePopup.vue'
export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
    SideBar,
    Popup
  },
  data () {
    return {}
  }
})
</script>
