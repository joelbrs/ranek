<template>
  <section class="login">
    <h1>Login</h1>
    <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="login.email">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <button class="btn" @click.prevent="signIn">Sign in</button>
        <p class="lost-it">
            <a href="/" target="_blank">Forget your Password?</a>
        </p>
    </form>

    <CreateLogin/>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateLogin from '@/components/CreateLogin.vue'

export default Vue.extend({
    name: 'LoginView',

    data() {
        return {
            login: {
                email: '' as string,
                password: '' as string
            }
        }
    },

    methods: {
        signIn() {
            this.$store.dispatch('getUser', this.login.email)
            this.$router.push('/user')
        }
    },

    components: { CreateLogin }
})
</script>

<style scoped>

.login {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

h1 {
    text-align: center;
    font-size: 2rem;
    color: #87f;

    margin-top: 40px;
    margin-bottom: 20px

}

form {
    display: grid;
}

.btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.lost-it {
    text-align: center;

    margin: 20px auto 0 auto;
}

.lost-it:hover {
    color: #87f;
    text-decoration: underline;
}

</style>