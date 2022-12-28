<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
        <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0]">
        <h2 class="title">{{ product.nome }}</h2>
        <p class="price">{{ product.preco }}</p>
        <p class="description">{{ product.descricao }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { api } from '@/services'
import { serialize } from '@/helpers'
 
export default Vue.extend({
    name: 'ListProducts',

    data() {
        return {
            products: [] as Array<object>,
        }
    },

    methods: {
        getProducts(): any {
            api.get(this.url)
            .then(r => {
                this.products = r.data;
            })
        }
    },

    computed: {
        url() {
            const query = serialize(this.$route.query);

            return 'produto?_limit=9' + query
        }
    },

    watch: {
        url() {
            this.getProducts()
        },
    },

    created() {
        this.getProducts()
    }
})
</script>

<style>

</style>