<script setup lang="ts">
import axios from "axios";
import {ref} from "vue"
import {usePosts} from "../stores/posts"
import NavBar from "../components/NavBar.vue";

const postsStore = usePosts()


let userData = ref({
    avatar:"",
    name: ""
});

axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
        "Authorization": "Bearer " + postsStore.getState().access_token
    }
})
.then(response => {
    userData.value = response.data;
})
.catch(error => {
  console.log(error);
});

</script>

<template>
  <NavBar/>
  <div class="card mb-3" style="width 50rem;">
    <div class="row no-gutters">
    <div class="col-md-4">
      <img v-bind:src="userData.avatar" class="card-img" alt="your picture">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ userData.name }}</h5>
      </div>
    </div>
  </div>
  </div>
</template>