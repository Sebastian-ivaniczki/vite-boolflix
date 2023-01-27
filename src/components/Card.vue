<script>
import { def } from '@vue/shared';

import {store} from './data/store'
export default {
    name: 'Card',

    data() {
        return {
            store, 
            imgSize: 'https://image.tmdb.org/t/p/w342/'
        }
    },
    computed: {
        getimgLocalUrl() {
            const url = new URL(`../../assets/${movie.original_language}.png`)
        }
    }

}
</script>
v-for="movie in store.moviesList" :key="movie.id"
<template>
<ul>
    <li class="my-5">
        <div>
            <img src="../assets/en.png" alt="">
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>
            <img :src="imgSize + movie.poster_path" :alt=" movie.title">
            
            <img :src=" getimgLocalUrl" :alt="movie.original_language">
            <span>{{ movie.vote_average }}</span>
        </div>
    </li>
</ul>
</template>

<style>

</style>