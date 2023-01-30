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
        setStarClass(n){
            let rating = this.getRating([this.type].vote_average);
            let starClass = n <= rating ? 'fa-solid' : 'fa-regular';
            return starClass + ' fa-star';
        },
        
        getRating (ratingValue) {
            const rating = Math.ceil(ratingValue / 2);
            console.log(rating)
            return rating;
        },
    },
    computed: {
        items() {
            return this.type === 'movies' ? this.store.movies : this.store.series;
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
    <div class="container">
        <ul> 
            <li v-for="item in items" :key="item.id" class="my-5">
                <div class="poster-body">
                    <div class="card-poster">
                        <img :src="imgSize + item.poster_path" :alt=" item[itemTitle]">

                    </div>
                    <div class="overlay">
                        <div class="card-info">
                            
                            <h5>{{ item[itemTitle] }}</h5>
                            <h7>{{ item[itemOriginalTitle] }}</h7>
                            <p>Rating:
                                <font-awesome-icon :icon="setStarClass(n)" v-for="n in 5" />
                            
                            </p>
                            <img class="flag" v-if="item.original_language === 'it' || item.original_language === 'en'" :src=" `/src/assets/${item.original_language}.png`" :alt="item.original_language">
                            <div v-else>{{ item.original_language }}</div>
                            
                        </div>

                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
   ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .poster-body{
     padding: 1rem;
     position: relative;  
     cursor: pointer; 
       
    }
    .card-poster{
        
        img{
            border-radius: 10px;
            display: block;
        }

    }
    .overlay{
        border-radius: 10px;
        position: absolute;
        top: 15px;
        bottom: 15px;
        right: 15px;
        left: 15px;
        background-color: rgba(0,0,0,0.9);
        display: none;
    }
    .poster-body:hover .overlay {
    display: block;
    }
    .card-info{
        color: #fff;
        padding: 1rem;

        position: absolute;
        bottom: 120px;
        
    }
    .flag{
        width: 30px;
    }
  
</style>