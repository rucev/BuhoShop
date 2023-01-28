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
  <form @submit.prevent="submitSearch" class="row g-3">
      <div class="col-auto">
          <span>Search</span><br>
          <input v-model="searchQuery" class="form-control form-control-lg" placeholder="Busca un producto"/><br>
      </div>

      <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Search</button>
      </div>
  </form>
  <div class="product-list-view--products container">
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

<style lang="scss">
.list-container {
  padding: 10px;
  &.list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    & > * {
      flex: 1 0 100%;
    }
    .list-item {
      border: 1px solid lightgrey;
      height: 60px;
      margin: 10px 0;
      display: flex;
      flex-direction: row;
      flex-wrap: none;
    }
    .list-item-image-container {
      width: 60px;
      flex: none;
    }
    .list-item-image {
      width: 40px;
      height: 40px;
      margin: 10px;
      object-fit: contain;
    }
    .list-item-data-container {
      flex: 1 0 auto;
    }
  }
  &.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    & > * {
      flex: none;
    }
  }
}
.list-item {
  border: 1px solid lightgrey;
  height: 260px;
  width: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: none;
}
.list-item-data-container {
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  padding: 5px;
  & > * {
    height: 30px;
  }
}
.list-item-data-name {
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.list-item-data-details {
  font-weight: normal;
  font-size: 14px;
}
.list-item-image-container {
  width: 200px;
  height: 200px;
}
.list-item-image {
  width: 180px;
  height: 200px;
  margin: 0 10px;
  object-fit: contain;
}
</style>