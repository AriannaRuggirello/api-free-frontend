<script>
import { RouterLink } from 'vue-router';



export default {
  components: {
    RouterLink,
  },

  data() {
  }
}

</script>

<template>
  <header>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">
      <router-link :to="{ name: 'home' }" aria-current="page">Home</router-link>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      <router-link :to="{ name: 'create' }" aria-current="page"><button type="button" class="btn btn-primary">crea post</button></router-link>
      </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>

</ul>
  </header>
</template>