<template>
  <section class="products-container">
    <transition mode="out-in">
        <div v-if="products && products.length > 0" class="products" key="products">
            <div v-for="product in products" :key="product.id" class="product">
                <router-link to="/">
                    <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0]">
                    <p class="price">{{ product.preco }}</p>
                    <h2 class="title">{{ product.nome }}</h2>
                    <p class="description">{{ product.descricao }}</p>
                </router-link>
            </div>
    
            <PaginationProducts :totalProducts="totalProducts" :productsPerPage="9" />
        </div>
    
        <div v-else-if="products && products.length === 0" key="without-results">
            <p class="without-results">Search without results. Try another term.</p>
        </div>
    
        <LoadingPage v-else key="loading"/>
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { api } from '@/services'
import { serialize } from '@/helpers'
import PaginationProducts from '@/components/PaginationProducts.vue'
import LoadingPage from '@/components/LoadingPage.vue' 

export default Vue.extend({
    name: 'ListProducts',

    data() {
        return {
            products: null,
            totalProducts: 0,
        }
    },

    methods: {
        getProducts(): any {
            this.products = null;
            setTimeout(() => {
                api.get(this.url)
                    .then(r => {
                        this.totalProducts = Number(r.headers['x-total-count'])
                        this.products = r.data;
                    })
            }, 1000)
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
    },

    components: { PaginationProducts, LoadingPage }
})
</script>

<style scoped>

.products-container {
    max-width: 1000px;

    margin: 0 auto;
}

.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    margin: 30px;
}

.product {
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);

    background: #fff;
    
    border-radius: 4px;

    transition: all 0.2s;

    padding: 10px;
}

.product:hover {
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);

    position: relative;
    z-index: 1;

    transform: scale(1.1);
}

.produto img {
    border-radius: 4px;
    margin-bottom: 20px;
}

.title {
    margin-bottom: 10px;
}

.price {
    color: #e80;
    font-weight: bold;
}

.without-results {
    text-align: center;
}

</style>