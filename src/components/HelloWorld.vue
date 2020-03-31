<template>
  <v-container>
    <h1 id="heading">
      {{ getTitle() }}
    </h1>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  data () {
    return {
      title: 'hello'
    }
  },
  computed: {}, // computed properties
  methods: {
    async getTitle () {
      let title = ''
      try {
        await fetch('http://127.0.0.1:5000/api')
          .then(response => {
            return response.json()
          })
          .then(myJson => {
            title = myJson.data
            const heading = document.getElementById('heading')
            if (heading !== null) {
              heading.innerHTML = title
            }
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
