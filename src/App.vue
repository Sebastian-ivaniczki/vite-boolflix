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
     
    }
  },
}
</script>

<template>

<AppHeader></AppHeader>
<AppMain></AppMain>
</template>

<style>

</style>
