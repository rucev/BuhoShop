<template>
    <img v-bind:src="props.imageUrl"  class="d-block w-100" alt="picture">
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
    imageUrl: string
}>()

</script>