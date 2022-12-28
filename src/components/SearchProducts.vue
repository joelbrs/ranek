<template>
  <form>
    <input type="text" name="q" id="search" v-model="search">
    <input type="submit" value="Search" id="lupa" @click="searchProducts">
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchProducts',

    data() {
        return {
            search: '',
        }
    },

    methods: {
        searchProducts() {
            this.$router.push({query: {q: this.search}})
        }
    }
})
</script>

<style>

</style>