<template>
  <nav>
    <v-navigation-drawer
      v-model="sidebar"
      :mini-variant.sync="mini"
      permanent
      color="accent"
      expand-on-hover
      light
      clipped
      app
    >
      <v-list class="display-1 font-weight-thin">
        <v-list-item
          v-for="item in sidebarItems"
          :key="item.title"
        >
          <v-list-item-icon>
            <router-link
              class="link"
              :to="item.link"
            >
              <v-icon
                class="icon"
                color="primary"
              >
                {{ item.icon }}
              </v-icon>
            </router-link>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link
              class="link"
              :to="item.link"
            >
              <v-list-item-subtitle
                class="font-weight-light mb-3"
                color="accent"
              >
                {{ $t(item.title) }}
              </v-list-item-subtitle>
            </router-link>
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
        link: '/' + i18n.locale + '/simulation'
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
