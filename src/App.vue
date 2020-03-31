<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            {{ $i18n.locale }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in langs"
            :key="index"
            @click="changeLang(item.short)"
          >
            <v-list-item-title>{{ item.full }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import i18n from './i18n'
import router from './router'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      langs: [
        { short: 'en', full: 'English' },
        { short: 'sv', full: 'Swedish' }
      ]
    }
  },
  methods: {
    changeLang: (lang: string) => {
      i18n.locale = lang
      router.push({
        params: { lang: lang }
      })
      console.log(lang)
    }
  }
})
</script>
