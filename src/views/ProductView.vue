<script lang="ts">
import NavBar from "../components/NavBar.vue";
import CarouselImage from "../components/CarouselImage.vue";
import {
    defineComponent
} from "vue";
import axios from "axios";


export default defineComponent ({
    components: {
        NavBar,
        CarouselImage
    },
    data() {
        return {
            productData: {
                category: {
                    name: ""
                },
                images: [],
                title: "",
                description: "",
                price: 0
            }
        }
    },
    created(){
     this.makeCall()
    } ,
    methods: {
        async makeCall() {
                axios.get("https://api.escuelajs.co/api/v1/products/" + this.$route.params.id, {})
                .then(response => {
                    this.productData.category.name = response.data.category.name;
                    this.productData.images = response.data.images;
                    this.productData.title = response.data.title;
                    this.productData.description = response.data.description;
                    this.productData.price = response.data.price;
                })
                .catch(error => {
                    console.log(error);
                });
            },

    }
});
</script>

<template>
    <NavBar />

    <div class="card border-dark mb-3 mx-auto" style="max-width: 25rem;">
        <div class="card-header">{{ productData.category.name }}</div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" :class="{ 'active': index === 0 }" v-for="(image, index) of productData.images" :key="image">
                    <CarouselImage :imageUrl="image"></CarouselImage>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h5 class="card-title">{{ productData.title }}</h5>
        <p class="card-text">{{ productData.description }}</p>
        <div class="card-footer">
        <small class="text-muted">{{ productData.price / 100}}$ </small>
        </div>
    </div>
</template>
