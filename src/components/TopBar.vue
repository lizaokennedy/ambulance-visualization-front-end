<template>
  <nav>
    <v-app-bar
      app
      color="transparent"
      class=".font-weight-thin"
      dark
      flat
    >
      <h1 class="display-1 font-weight-thin mb-4">
        {{ $t("message") }}
      </h1>
      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="transparent"
            flat
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
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '../i18n'
import router from '../router'

export default Vue.extend({
  name: 'TopBar',

  data: () => ({
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
