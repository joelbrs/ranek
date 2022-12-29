<template>
  <section>
    <h2>Create Your Account</h2>
    <transition mode="out-in">
      <button v-if='!create' class="btn" @click="create = true">Create Account</button>
      <UserForm v-else >
        <button class="btn btn-form">Create User</button>
      </UserForm>
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import UserForm from '@/components/UserForm.vue'

export default Vue.extend({
    name: 'CreateLogin',

    data() {
      return {
        create: false
      }
    },

    components: { UserForm }
})
</script>

<style scoped>

h2 {
  text-align: center;

  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>>
