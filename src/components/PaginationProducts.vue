<template>
    <ul>
        <li v-for="page in totalPages" :key="page">
            <router-link :to="{ query: query(page) }">{{ page }}</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'PaginationProducts',

    props: {
        productsPerPage: {
            type: Number,
            default: 1,
        },
        totalProducts: {
            type: Number,
            default: 1,
        }
    },

    methods: {
        query(page: number) {
            return {
                ...this.$route.query,
                _page: page
            }
        }
    },

    computed: {
        totalPages() {
            const total = this.totalProducts / this.productsPerPage
        
            return (total !== Infinity) ? Math.ceil(total) : 0;
        }
    }
})
</script>

<style scoped>
ul {
    text-align: center;
    grid-column: 1 / -1;
}

li {
    display: inline-block;
}

li a {
    border-radius: 2px;

    margin: 4px;
    padding: 2px 8px;
}

li a.router-link-exact-active, li a:hover {
    background: #87f;

    color: #fff;
}

</style>