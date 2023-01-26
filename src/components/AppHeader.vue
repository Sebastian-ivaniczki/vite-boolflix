<script>
export default {
    name: 'AppHeader',
    data() {
        return{
            serch:''
        }
    }
}
</script>

<template>
<div class="input-group mb-3">
  <input v-model="serch" type="text" class="form-control" placeholder="inserisci nome film">
  <button class="btn btn-outline-secondary">Button</button>
</div>
</template>

<style scoped>

</style>