<template>
  <div class="home">
    <Title />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '../components/Title.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Title
  },
  data: () => ({
    //
  })
})
</script>
