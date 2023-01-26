<script>
import { store } from './data/store'
export default {
    name: 'AppMain',
    data() {
        return{
           store, 
           imgSize: 'https://image.tmdb.org/t/p/w342/'
        }
    },
   
}
</script>

<template>
<ul>
    <li class="my-5" v-for="movie in store.moviesList" :key="movie.id">
        <div>
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>
            <img :src="imgSize + movie.poster_path" :alt=" movie.title">
            
            <img :src="`/src/assets/${movie.original_language}.png`" :alt="movie.original_language">
            <span>{{ movie.vote_average }}</span>
        </div>
    </li>
</ul>
<h1 class="my-5 text-danger">series</h1>

<ul>
    <li class="my-5" v-for="serie in store.seriesList" :key="serie.id">
        <div>
            <h2>{{ serie.name }}</h2>
            <h3>{{ serie.original_name }}</h3>
            <img :src="imgSize + serie.poster_path" :alt="serie.name">
            
            <img :src="`/src/assets/${serie.original_language}.png`" :alt="serie.original_language">
            <span>{{ serie.vote_average }}</span>
        </div>
    </li>
</ul>
</template>

<style scoped>

</style>