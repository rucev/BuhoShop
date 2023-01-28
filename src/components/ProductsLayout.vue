<template>
  <div class="view-controls">
    <div
      id="view-list"
      @click="$emit('update:modelValue', productsLayout.List)"
      :class="['view-control', { selected: modelValue === productsLayout.List }]"
    >
      <font-awesome-icon icon="list" />
    </div>
    <div
      id="view-grid"
      @click="$emit('update:modelValue', productsLayout.Grid)"
      :class="['view-control', { selected: modelValue === productsLayout.Grid }]"
    >
      <font-awesome-icon icon="border-all" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
export enum ProductsLayout {
  List = "List",
  Grid = "Grid",
}
export default defineComponent({
  props: {
    modelValue: Object as PropType<ProductsLayout>,
  },
  emits: ["update:modelValue"],
  computed: {
    productsLayout() {
      return ProductsLayout;
    },
  },
});
</script>

<style lang="scss">
.view-controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
  height: 40px;
  line-height: 40px;
  & .view-control {
    flex: 1 0 30px;
    text-align: center;
    font-size: 19px;
    background-color: lightgrey;
    cursor: pointer;
    color: rgb(87, 87, 87);
    &.selected {
      background-color: black;
      color: white;
    }
  }
}
</style>