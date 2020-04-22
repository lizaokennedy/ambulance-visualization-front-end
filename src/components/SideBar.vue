<template>
  <nav>
    <v-navigation-drawer
      v-model="sidebar"
      :mini-variant.sync="mini"
      permanent
      expand-on-hover
      color="transparent"
      light
      app
    >
      <v-list class="display-1 font-weight-thin mb-4"
dense>
        <v-list-item class="display-1 font-weight-thin mb-4">
          <v-list-item-avatar class="side-icon">
            <router-link class="link"
:to="HomeLink">
              <v-icon dark
class="icon">
                mdi-home
              </v-icon>
            </router-link>
          </v-list-item-avatar>
          <router-link class="link"
:to="HomeLink">
            <v-list-item-title
              class="display-1 font-weight-light mb-4 subtitle-1"
              dark
            >
              Ambu-Lenz
            </v-list-item-title>
          </router-link>
          <v-list-item-title />
        </v-list-item>

        <v-list-item v-for="item in sidebarItems"
:key="item.title">
          <v-list-item-icon dark>
            <router-link class="link"
:to="item.link">
              <v-icon dark
class="icon">
                {{ item.icon }}
              </v-icon>
            </router-link>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link"
:to="item.link">
              <v-list-item-title
                class="display-1 font-weight-light mb-4 subtitle-2"
                color="white"
              >
                {{ $t(item.title) }}
              </v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "../i18n";

export default Vue.extend({
  name: "SideBar",

  data: () => ({
    HomeLink: "/" + i18n.locale,
    sidebar: true,
    sidebarItems: [
      {
        title: "sidebar.startSimulation",
        icon: "mdi-play-circle-outline",
        link: ""
      },
      {
        title: "sidebar.showHistory",
        icon: "mdi-history",
        link: "/" + i18n.locale + "/history"
      }
    ],
    mini: true
  })
});
</script>
