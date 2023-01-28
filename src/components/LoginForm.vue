<template>
    <img src="../assets/logo.png" class="logo" alt="logo"/>
    <div class="form-box">
    <div class="container">
        <form @submit.prevent="submitUser" v-if="!userSubmitted" class="row g-3">
            <div class="form-outline mb-4">
                <span>Email</span><br>
                <input v-model="email" class="form-control" type="email" placeholder="Enter your mail" required/><br>
            </div>
            <div class="form-outline mb-4">
                <span>Password</span><br>
                <input v-model="password" class="form-control" type="password" placeholder="Enter your password" required/><br>
            </div>
            
            <div class="form-outline mb-4">
                <button type="submit" class="btn btn-secondary mb-3">Login</button>
            </div>
        </form>
    </div>
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
          try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: this.email,
                password: this.password
            });
            if (response.status === 201) {
                console.log("yeei, login succesful");
                postsStore.updateAccessToken(response.data.access_token);
                postsStore.updateRefreshToken(response.data.refresh_token);
                this.$router.push({ name: 'products' });
            } else {
                console.log("oooh, login fail");
                // TODO: pantalla error (status de de 401)
            }
          } catch (error) {
            console.log("Error:", error);
          }
        }
    },
});


</script>
<style scoped>
body{
    min-height: 50em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-box{
    background-color: rgb(228, 228, 228);
    border-radius: 5% 1%;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    margin: 0% 2% 0%;
    padding: 3rem 0.1rem 1rem;
}

input[type=email], input[type=password] {
    width: 95%;
}

.form-control{
    font-weight: 300;
    font-style: italic;
}
.container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    width: 90%;
}

.logo {
    max-height: 10em;
    margin: 10% 2% 0%;
}

</style>