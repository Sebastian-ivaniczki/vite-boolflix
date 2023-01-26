<script>
import { store } from './data/store'
export default {
    name: 'AppHeader',
    data() {
        return{
           
            store
        }
    },
    emits:[ 'searchedText' ] 
       
}
</script>

<template>
<div class="input-group mb-3">
  <input @keyup.enter="$emit('searchedText', store.searchedText)" v-model="store.searchedText" type="text" class="form-control" placeholder="inserisci nome film">
  <button class="btn btn-outline-secondary">Button</button>
</div>
</template>

<style scoped>

</style>