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
            
            <img :src="`/src/assets/${movie.original_language}.png`" :alt="movie.original_language">
            <span>{{ movie.vote_average }}</span>
        </div>
    </li>
</ul>
<h1>series</h1>

<ul>
    <li v-for="serie in store.seriesList" :key="serie.id">
        <div>
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            
            <img :src="`/src/assets/${serie.original_language}.png`" :alt="serie.original_language">
            <span>{{ serie.vote_average }}</span>
        </div>
    </li>
</ul>
</template>

<style scoped>

</style>