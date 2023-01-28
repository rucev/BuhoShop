<template>
    <div class="container-sm">
        <form @submit.prevent="submitUser" v-if="!userSubmitted" class="row g-3">
            <div class="col-auto">
                <span>Email</span><br>
                <input v-model="email" class="form-control form-control-lg" type="email" placeholder="Introduce tu mail" required/><br>
            </div>
            <div class="col-auto">
                <span>Password</span><br>
                <input v-model="password" class="form-control form-control-lg" type="text" placeholder="Introduce tu contraseña" required/><br>
            </div>
            
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Login</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import {usePosts} from "../stores/posts"

const postsStore = usePosts()

export default defineComponent({
    data() {
        return {
            email: "",
            password: "",
            userSubmitted: false,
            token: 0
        };
    },
    methods: {
      async submitUser() {
          postsStore.updateEmail(this.email);
          /*store.commit("changeToken", "florsToken");
          store.commit("changeEmail", this.email);
          store.commit("changeName", "charchi")*/

          try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: this.email,
                password: this.password
            });
            if (response.status === 201) {
                console.log("yeei");
                postsStore.updateAccessToken(response.data.access_token);
                postsStore.updateRefreshToken(response.data.refresh_token);
                this.$router.push({ name: 'products' });
            } else {
                console.log("oooh");
                // TODO: pantalla error (status de de 401)
            }
          } catch (error) {
            console.log("Error:", error);
          }
        }
    },
});


</script>
<style>
</style>