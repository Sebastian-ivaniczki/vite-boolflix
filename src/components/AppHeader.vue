<script>
import { store } from './data/store'
export default {
    name: 'AppHeader',
    data() {
        return{
           
            store
        }
    },
    emits:[ 'searched' ] 
       
}
</script>

<template>
<div class="input-group mb-3">
  <input v-model="store.searchedText" type="text" class="form-control" placeholder="inserisci nome film">
  <button @click="$emit('searched', store.searchedText)" class="btn btn-outline-secondary">Button</button>
</div>
</template>

<style scoped>

</style>