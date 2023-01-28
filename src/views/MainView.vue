<template>
  <div>
  <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import {usePosts} from "../stores/posts"

export default defineComponent({
  name: 'MainView',
  created(){
    const postsStore = usePosts()
    if(postsStore.getState().access_token == "") {
      this.$router.push({ name: 'login' });
    }
  }
});

</script>

<style>
@import "@/assets/base.css";
</style>