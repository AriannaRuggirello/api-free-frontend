<script>
import axios from "axios";

import { RouterLink } from 'vue-router';


export default {
  components: {
  },
  data() {
    return {
        RouterLink,
       
        categories: [],
        tags:[],
      newPost: {
        "title": "",
        "image": "",  
        "content": "",    
        "published": true,
        "categories": [],
        "tags": []
      },
    
    };
  },
  mounted() {
    axios.get("http://localhost:3000/categories/").
    then( (res) => {
      this.store.categories = res.data;
      console.log(this.store.categories);
      }
    );
    
    axios.get("http://localhost:3000/tags/").
    then( (res) => {
      this.store.tags = res.data;
      console.log(this.store.tags);
      }
    ) 
  },
  methods:{
    createNewPost(){
      axios.post("http://localhost:3000/posts/", this.newPost)
      .then(() => {
          // Reindirizza a 'home' dopo la creazione del post
          this.$router.push({ name: 'home' });
        })
    },
   }
};
</script> 

<template>



    <div class="container">
        
    
      <router-link :to="{ name: 'home' }">
                <a> Torna alla home</a>
      </router-link>
        <form method="POST">    
            <!-- title -->
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">title</label>
              <input class="form-control" type="text" id="title" name="title" v-model="this.newPost.title">
            </div>
            <!-- content -->
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">content:</label>
              <input class="form-control" type="text" id="content" name="content"  v-model="this.newPost.content">
            
            </div>
            <!-- image -->
            <div class="mb-3">
              <label for="formFile" class="form-label">image</label>
              <input class="form-control"  type="text" id="image" name="image" placeholder="inserisci immagine..."  v-model="this.newPost.image">
            </div>
            <!-- category -->
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose a category</option>
              <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
          
            </select>

            
            
  
            
        
        
                
              
                <!--tags  -->
                <div>
                    <span>fai sapere di cosa parla il tuo post, dagli dei tags</span>
                    <div v-for="tag in tags">
        
                    <label :for="tag.id" :key="tag.id">{{ tag.name }}</label>
                    <input type="checkbox" :value="tag.id" v-model="this.newPost.tags">
                    </div>
                </div>
        
           
       

              <button style="max-width:150px" type="button" class="btn btn-success my-4 " value="pubblica" @click="createNewPost()">CREA
              </button>
          
            

        </form>

    </div>
   
</template>
