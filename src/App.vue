<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader, AppMain },
  data() {
    return {

    }
  }
}
</script>

<template>
<AppHeader></AppHeader>
<AppMain></AppMain>
</template>

<style scoped>

</style>
