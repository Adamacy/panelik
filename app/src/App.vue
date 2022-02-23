<template>
  <v-app>
    <HeaderView/>

  </v-app>
</template>

<script>
import HeaderView from '@/components/Header.vue'

export default {
  name: 'AppView',
  components: {
    HeaderView
  }
}
</script>
<style>
a{
  text-decoration: none;
}
.router-link-exact-active{
    color:deeppink;
}

</style>