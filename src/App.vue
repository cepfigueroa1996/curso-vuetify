<template>
  <v-app id="fondo">
    <Navbar />
    <v-content class="mx-4 mt-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components:{ Navbar},
  data: () => ({
    //
  }),
};
</script>


<style>
  #fondo{
    background-color:#F5F5F5;
  }
</style>