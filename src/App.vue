<script>
import axios from 'axios'
import {store} from './components/data/store'
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader, AppMain },
  data () {
    return {
      store,
      apiKey: '3804462719384461f507b7cd3f30d4e5',
      moviesApiUri: 'https://api.themoviedb.org/3/search/movie?',
      seriesApiUri: 'https://api.themoviedb.org/3/search/tv?'
     
    }
  },
  methods: {
    getMovies (searchedText) {
      
      axios.get(this.moviesApiUri, {
        params: {
          api_key: this.apiKey,
          query: searchedText,
          
        }
      })
      .then((res) => {
       
        this.store.moviesList = res.data.results;
        
    })   
    },
    getSeries (searchedText) {
      console.log(searchedText);
      axios.get(this.seriesApiUri, {
        params: {
          api_key: this.apiKey,
          query: searchedText,
          
        }
      })
      .then((res) => {
        
        this.store.seriesList = res.data.results;
        
     }) 
   },  
    searchAll(searchedText){
      this.getMovies(searchedText);
      this.getSeries(searchedText)
    }
  
  }
}
</script>

<template>

<AppHeader @searched="searchAll"></AppHeader>
<AppMain></AppMain>
</template>

<style>

</style>
