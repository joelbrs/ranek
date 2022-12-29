<template>
  <form>
    <input type="text" name="q" id="search" v-model="search" placeholder="Search...">
    <input type="submit" value="Search" id="lupa" @click="searchProducts">
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SearchProducts',

    data() {
        return {
            search: '' as string,
        }
    },

    methods: {
        searchProducts() {
            this.$router.push({query: {q: this.search}})
        }
    }
})
</script>

<style scoped>

form {
    max-width: 600px;

    margin: 30px auto 60px auto;

    position: relative;
}

#search {
    width: 100%;

    border: none;

    padding: 20px;
}

#search:focus, 
#search:hover {
    transform: scale(1.1); 
}

#lupa {
    width: 62px;
    height: 62px;

    background: url('../assets/search.svg') no-repeat center center;
    border: none;
    cursor: pointer;

    position: absolute;
    top: 0px;
    right: 0px;

    text-indent: -150px;

    box-shadow: none;
}

</style>

