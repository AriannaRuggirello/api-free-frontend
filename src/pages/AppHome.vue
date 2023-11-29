<script>
import axios from 'axios';

import { RouterLink } from 'vue-router';
import postCard from '../components/postCard.vue';

export default {
    components: {
        RouterLink,
        postCard
    },
    data() {
        return {
         
            posts:[],
        }
    },
    methods: {
      getPosts() {
          axios.get("http://localhost:3000/posts/")
              .then(response => {
                  store.posts = response.data;
                  console.log(JSON.stringify(this.posts, null, 2));
              })
              .catch(error => {
                  console.error(error);
              });
      }


    },
    mounted() {
        this.getPosts();
    }
}
</script>

<template>
  <div class="row">
    <postCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>


<style lang="scss">

</style>