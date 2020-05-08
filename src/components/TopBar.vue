<template>
  <nav>
    <v-app-bar
      app
      color="primary"
      class=".font-weight-thin topbar fixed"
      dark
      flat
      clipped-left
    >
      <router-link
        class="link"
        :to="HomeLink"
      >
        <v-icon color="accent">
          mdi-home
        </v-icon>
      </router-link>
      <v-spacer />

      <h1 class="display-1 font-weight-thin mb-4 whiteText">
        Ambu-Lenz
      </h1>
      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            class="font-weight-thin"
            color="accent"
            flat
            v-on="on"
          >
            {{ $i18n.locale }}
          </v-btn>
        </template>
        <v-list
          class="font-weight-thin"
          color="accent"
        >
          <v-list-item
            v-for="(item, index) in langs"
            :key="index"
            @click="changeLang(item.short)"
          >
            <v-list-item-subtitle
              color="primary"
              class="whiteText"
            >
              {{ item.full }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '../i18n'
import router from '../router'

export default Vue.extend({
  name: 'TopBar',

  data: () => ({
    HomeLink: '/' + i18n.locale,
    langs: [
      { short: 'en', full: 'English' },
      { short: 'sv', full: 'Swedish' }
    ]
  }),
  methods: {
    changeLang: (lang: string) => {
      i18n.locale = lang
      router.push({
        params: { lang: lang }
      })
    }
  }
})
</script>
