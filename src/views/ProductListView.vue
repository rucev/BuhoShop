<script lang="ts">
import {ref} from "vue"
import NavBar from "../components/NavBar.vue";
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    NavBar,
    ProductCard
  },
  data() {
      return {
        searchQuery: "",
        products: [{
            category: {
                name: ""
            },
            images: [],
            title: "",
            description: "",
            price: 0
        }]
        }
  },
  mounted() {
    axios.get("https://api.escuelajs.co/api/v1/products?limit=20&offset=0", {})
    .then(response => {
      this.products = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  },
  methods: {
    submitSearch() {
      if(this.searchQuery.length < 3) {
        return
      }
      axios.get("https://api.escuelajs.co/api/v1/products/?title=" + this.searchQuery, {})
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
});
</script>

<template>
  <NavBar/>
  <form @submit.prevent="submitSearch">
    <div class="input-group search-form">
      <input v-model="searchQuery" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button type="button" class="btn btn-dark">search</button>
    </div>
  </form>
  <div class="product-list-view--products container item-list">
    <div class="product" v-for="product of products" :key="product">
      <ProductCard 
        :description=product.description
        :image=product.images[0]
        :price=product.price
        :product-id=product.id
        :title=product.title>
      </ProductCard>
    </div>
  </div>
</template>

<style scoped>
.item-list {
  display: flex;
  flex-flow: row wrap;
  width: 95%;
  gap: 1rem 1rem;
}

.search{
  font-weight: 700;
}

.search-form{
  max-width: 50%;
  display: flex;
  margin: 5% 20% 5%;
}
</style>