<script>
import { store } from './data/store'
import Card from './Card.vue';
export default {
    name: 'AppMain',
    components: {Card},
    data() {
        return{
           store, 
           
           movies: 'movies',
           series: 'series'
        }
    },
    methods: {
        getRating (ratingValue) {
            const rating = Math.ceil(ratingValue / 2);
            
            return rating;
         }
    }
    
}
</script>

<template>
    <div>
        <card :type="movies"></card>
        <h1 v-if="store.series.length" class="text-danger text-center">Series</h1>
        <card :type="series"></card>

    </div>
</template>

<style scoped>

   
</style>