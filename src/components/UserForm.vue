<template>
  <form>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="nome">
  
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="senha">
  
    <label for="cep">Postal Code</label>
    <input type="text" name="cep" id="cep" v-model="cep">

    <label for="street">Street</label>
    <input type="text" name="street" id="street" v-model="rua">

    <label for="number">Number</label>
    <input type="number" name="number" id="number" v-model="numero">

    <label for="district">District</label>
    <input type="text" name="district" id="district" v-model="bairro">

    <label for="city">City</label>
    <input type="text" name="city" id="city" v-model="cidade">

    <label for="state">State</label>
    <input type="text" name="state" id="state" v-model="estado">
  
    <div class="button">
        <slot></slot>
    </div>
  </form>
</template>

<script lang=ts>
import Vue from 'vue'

export default Vue.extend({
    name: 'UserForm',

    computed: {
        nome: {
            get() {
                return this.$store.state.usuario.nome
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {nome: value})
            }
        },
        email: {
            get() {
                return this.$store.state.usuario.email
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {email: value})
            }
        },
        senha: {
            get() {
                return this.$store.state.usuario.senha
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {senha: value})
            }
        },
        cep: {
            get() {
                return this.$store.state.usuario.cep
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {cep: value})
            }
        },
        rua: {
            get() {
                return this.$store.state.usuario.rua
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {rua: value})
            }
        },
        numero: {
            get() {
                return this.$store.state.usuario.numero
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {numero: value})
            }
        },
        bairro: {
            get() {
                return this.$store.state.usuario.bairro
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {bairro: value})
            }
        },
        cidade: {
            get() {
                return this.$store.state.usuario.cidade
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {cidade: value})
            }
        },
        estado: {
            get() {
                return this.$store.state.usuario.estado
            },

            set(value) {
                this.$store.commit('UPDATE_USER', {estado: value})
            }
        },
    }
})
</script>

<style scoped>

form {
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}

</style>>
