<script>

import axios from 'axios'
import AppHeader from './components/AppHeader.vue'



export default {
  components: { 
    AppHeader,
    
  },
  data() {
  
  },
}

</script>

<template>
  <div class="app">
    <AppHeader />
   
    <router-view></router-view>
  </div>
</template>

<style >

</style>
