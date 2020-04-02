<template>
  <v-app>
    <nav>
      <v-toolbar
        flat
        app
      >
        <v-app-bar
          app
          color="primary"
          dark
        >
          <h1>{{ $t("message") }}</h1>
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
      </v-toolbar>
    </nav>

    <v-content>
      <nav>
        <v-navigation-drawer
          v-model="sidebar"
          :mini-variant.sync="mini"
          permanent
          color="primary"
          app
        >
          <v-list-item color="white">
            <v-list-item-avatar class="side-icon">
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </v-list-item-avatar>

            <v-list-item-title color="secondary" />
          </v-list-item>
          <v-divider />

          <v-list-item color="white">
            <v-list dense>
              <v-list-item
                v-for="item in sidebarItems"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item>
        </v-navigation-drawer>
      </nav>
      <HelloWorld />
    </v-content>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import i18n from './i18n'
import router from './router'
import Vuetify from './plugins/vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#19647e',
    secondary: '#eaebed',
    accent: '#f4d35e',
    warning: '#f4d35e',
    success: '#16bac5'
  }
})

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
      ],
      sidebar: true,
      sidebarItems: [
        { title: 'sidebar.startSimulation', icon: 'mdi-play-circle-outline' },
        { title: 'sidebar.showHistory', icon: 'mdi-history' }
      ],
      mini: true
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
