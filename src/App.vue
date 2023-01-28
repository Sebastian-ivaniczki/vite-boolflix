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
    
    getData(apiUri, storeProp) {
      if(!store.searchedText){
        return
      }
       axios.get(apiUri, {
        params: {
          api_key: this.apiKey,
          query: store.searchedText,
        }
      })
      .then((res) => {
        this.store[storeProp] = res.data.results;
      })   
    },
    searchAll(){
      
      this.getData(this.moviesApiUri, 'moviesList')
      this.getData(this.seriesApiUri, 'seriesList')
      store.searchedText = ''
    } 
  }
}
</script>

<template>

<AppHeader @searched="searchAll"></AppHeader>
  <AppMain></AppMain>
</template>

<style>
  body{
    background-color: #434343;
  }
  
</style>
