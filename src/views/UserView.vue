<script setup lang="ts">
import axios from "axios";
import {ref} from "vue"
import {usePosts} from "../stores/posts"
import NavBar from "../components/NavBar.vue";

const postsStore = usePosts()


let userData = ref({
    avatar:"",
    name: "",
    email: "",
    role: ""
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
  <div class="card border-dark mb-3 mx-auto" style="max-width: 90%; margin: 1% 0%">
    <div class="row no-gutters">
    <div class="col-md-4">
      <img v-bind:src="userData.avatar" class="card-img" alt="your picture">
    </div>
    <div class="col-md-8 text-position">
      <div class="card-body ">
        <h5 class="card-title">NAME: {{ userData.name }}</h5>
        <h5 class="card-title">MAIL: {{ userData.email }}</h5>
        <h5 class="card-title">ROLE: {{ userData.role }}</h5>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.text-position{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 5%;
}
</style>