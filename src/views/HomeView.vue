<template>
  <section>
    <h1>Buy or Sell</h1>
    <SearchProducts/>
    <ListProducts/>
  </section>
</template>

<script lang="ts">
import SearchProducts from '@/components/SearchProducts.vue';
import ListProducts from '@/components/ListProducts.vue';
import Vue from 'vue'

export default Vue.extend({

  components: { SearchProducts, ListProducts }
})
</script>

<style scoped>

h1 {
  font-size: 2rem;
  color: #87f;
  text-align: center;

  margin-top: 40px;
}
</style>
