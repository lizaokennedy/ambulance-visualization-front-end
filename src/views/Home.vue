<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ButtonCount/>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonCount from "@/components/ButtonCount.vue"

export default {
  name: "Home",
  components: {
    ButtonCount
  }
};
</script>