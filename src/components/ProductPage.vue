<template>
  <section>
    <div class="product" v-if="product">
        <ul class="pictures" v-if="product.fotos">
            <li v-for="(picture, i) in product.fotos" :key="i">
                <img :src="foto.src" :alt="foto.titulo">
            </li>
        </ul>

        <div class="info">
            <h1>{{ product.nome }}</h1>
            <p class="price"> {{ product.preco | priceNumber }}</p>
            <p class="description">{{ product.descricao }}</p>
            <button class="btn" v-if="product.vendido === 'false'">Comprar</button>
            <button class="btn" v-else disabled>Produto Vendido</button>
        </div>
    </div>

    <LoadingPage v-else/>
  </section>
</template>

<script lang=ts>
import { api } from '@/services'
import Vue from 'vue'
import LoadingPage from '@/components/LoadingPage.vue'

export default Vue.extend({
    name: 'ProductPage',

    props: ['id'],

    data() {
        return {
            product: null
        }
    },

    methods: {
        getProducts(): any {
            api.get(`produto/${this.id}`)
            .then(r => {
                this.product = r.data
            })
        }
    },

    created() {
        this.getProducts()
    },

    components: { LoadingPage }
})
</script>

<style scoped>

.product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;
}

.price {
    color: #e80;
    font-weight: bold;
    font-size: 1.5rem;

    margin-bottom: 40px;
}

.description {
    font-size: 1.2rem;
}

.btn {
    margin-top: 60px;
    width: 200px;
}

</style>