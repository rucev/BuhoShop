<template>
    <div v-if="showAlert">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <div class="error-text">
                Error: Invalid user or password
                <button type="button" class="close btn btn-outline-secondary btn-sm" data-dismiss="alert" @click="closeAlert">
                    <span>&times;</span>
                </button>
            </div>
        </div>
    </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorModal',
  data(){
    return {
        showAlert: true
    }
  },
  methods: {
    closeAlert(){
        this.showAlert = false
    }
  }
});

</script>

<style scoped>
.error-text{
    font-weight: 500;
}
</style>