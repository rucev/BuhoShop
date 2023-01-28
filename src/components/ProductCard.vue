<script setup lang="ts">
import { defineProps } from 'vue'
import RouteBtn  from './RouteBtn.vue'
const props = defineProps<{
    productId: number
    image: string
    description: string
    title: string
    price: number
}>()

let toValue = "/product/" + props.productId;
</script>

<template>
    <div class="card" style="width: 18rem;">
      <img v-bind:src="image" class="card-img-top" v-bind:alt="description">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ price / 100 + " $"}}</p>
        <RouteBtn :toUrl=toValue >Open</RouteBtn>
      </div>
    </div>
</template>