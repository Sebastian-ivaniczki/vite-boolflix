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
    <header>
        
        <div class="container d-flex justify-content-between align-items-center h-100">
            <div class="logo">
                <h1 class="text-danger"><strong>BOOLFLIX</strong></h1>
            </div>
            <div class="input-group mb-3">
                <input v-model.trim="store.searchedText" type="text" class="form-control" placeholder="inserisci nome film">
                <button @click="$emit('searched', store.searchedText)" class="btn btn-outline-primary">serch</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: #000;
    height: 90px;
}

.input-group{
    width: 30%;
  
}
</style>