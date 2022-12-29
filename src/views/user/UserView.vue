<template>
  <p>User: {{ $store.state.usuario }}</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'UserView'
})
</script>

<style>

</style>