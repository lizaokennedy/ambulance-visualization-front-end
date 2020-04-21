<template>
  <v-container>
    <v-card class="history-list" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title
            id="heading"
            class="headline mb-1 display-1 font-weight-thin"
          >
            Ambu-Lenz
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            This is Ambu-Lenz
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-container>
        <v-row>
          <v-col>
            <Card
              :title="startSim.title"
              :icon="startSim.icon"
              :link="startSim.link"
            />
          </v-col>
          <v-col>
            <Card
              :title="history.title"
              :icon="history.icon"
              :link="history.link"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "../components/TitleCard.vue";
import i18n from "../i18n";
import DataService from "../services/data.service";

export default Vue.extend({
  name: "Title",
  components: {
    Card
  },

  data() {
    return {
      title: "hello",
      dataService: DataService,
      startSim: {
        title: "sidebar.startSimulation",
        icon: "mdi-play-circle-outline",
        link: ""
      },
      history: {
        title: "sidebar.showHistory",
        icon: "mdi-history",
        link: "/" + i18n.locale + "/history"
      }
    };
  },
  computed: {}, // computed properties
  methods: {
    getTitle() {
      DataService.getTitle().then(title => {
        if (title !== undefined) {
          const heading = document.getElementById("heading");
          if (heading !== null) {
            heading.innerHTML = title;
          }
        }
      });
    }
  }
});
</script>
