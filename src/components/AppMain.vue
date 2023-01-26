<script>
import { store } from './data/store'
export default {
    name: 'AppMain',
    data() {
        return{
           
            store
        }
    },
   
}
</script>

<template>
<ul>
    <li v-for="movie in store.moviesList" :key="movie.id">
        <div>
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>
            
            <img :src="`../assets/${movie.original_language}.png`" alt="">
            <span>{{ movie.vote_average }}</span>
        </div>
    </li>
</ul>
</template>

<style scoped>

</style>