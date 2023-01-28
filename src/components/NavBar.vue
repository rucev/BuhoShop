<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">
            <img src="../assets/logo.png" width="30" height="30" style="margin-left: 15%;" class="d-inline-block align-top" alt="logo">
            BuhoShop
        </a>
        <div class="navbar-collapse" style="margin-left: 2%;" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink to="/products" class="nav-link">PRODUCTS</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/user" class="nav-link">USER</RouterLink>
                </li>
            </ul>
        </div>
        <form class="form-inline" style="margin-right: 2%;">
            <button @click="logOut" class="btn btn-sm btn-outline-secondary" type="button">LogOut</button>
        </form>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import {usePosts} from "../stores/posts"

export default defineComponent({
  name: 'MainView',
  methods: {
    logOut(){
        const postsStore = usePosts()
        postsStore.updateAccessToken("")
        postsStore.updateEmail("")
        postsStore.updateRefreshToken("")
        this.$router.push({ name: 'login' });
    }
  }

});

</script>