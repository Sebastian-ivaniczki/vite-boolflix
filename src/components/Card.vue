<script>
import { store } from './data/store'

export default {
    name: 'Card',

    data() {
        return{
           store, 
           imgSize: 'https://image.tmdb.org/t/p/w342/'
        }
    },
    props: {
        type: {
            type: String,
            default: 'movies'
        }
    },
    methods: {
        getRating (ratingValue) {
            const rating = Math.ceil(ratingValue / 2);
            
            return rating;
         }
    },
    computed: {
        items() {
            return this.type === 'movies' ? this.store.moviesList : this.store.seriesList;
        },
        itemTitle() {
            return this.type === 'movies' ? 'title' : 'name';
        },
        itemOriginalTitle() {
            return this.type === 'movies' ? 'original_title' : 'original_name';
        },
        
    }
}
</script>
<template>
    <ul>
    <li v-for="item in items" :key="item.id" class="my-5">
        <div>
            <h2>{{ item[itemTitle] }}</h2>
            <h3>{{ item[itemOriginalTitle] }}</h3>
            <img :src="imgSize + item.poster_path" :alt=" item[itemTitle]">
            <p>Rating:
              <font-awesome-icon icon="fa-solid fa-star" v-for=" n in getRating(item.vote_average)" />
              <span v-if="getRating(item.vote_average) == 0">No ratings found</span>
            </p>
            <img v-if="item.original_language === 'it' || item.original_language === 'en'" :src=" `/src/assets/${item.original_language}.png`" :alt="item.original_language">
            <div v-else>{{ item.original_language }}</div>
            
        </div>
    </li>
</ul>
</template>
<style scoped>

</style>