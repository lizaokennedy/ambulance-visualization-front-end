<template>
  <nav>
    <v-navigation-drawer
      v-model="sidebar"
      :mini-variant.sync="mini"
      permanent
      color="transparent"
      light
      app
    >
      <v-list-item class="display-1 font-weight-thin mb-4">
        <v-list-item-avatar class="side-icon">
          <v-btn
            icon
            dark
            @click.stop="mini = !mini"
          >
            <v-icon dark>
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </v-list-item-avatar>

        <v-list-item-title />
      </v-list-item>

      <v-list
        class="display-1 font-weight-thin mb-4"
        dense
      >
        <v-list-item
          v-for="item in sidebarItems"
          :key="item.title"
          link
        >
          <v-list-item-icon dark>
            <router-link :to="item.link">
              <v-icon
                dark
                class="icon"
              >
                {{ item.icon }}
              </v-icon>
            </router-link>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="display-1 font-weight-light mb-4 subtitle-2">
              {{ $t(item.title) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '../i18n'

export default Vue.extend({
  name: 'SideBar',

  data: () => ({
    sidebar: true,
    sidebarItems: [
      {
        title: 'sidebar.startSimulation',
        icon: 'mdi-play-circle-outline',
        link: ''
      },
      {
        title: 'sidebar.showHistory',
        icon: 'mdi-history',
        link: '/' + i18n.locale + '/history'
      }
    ],
    mini: true
  })
})
</script>
