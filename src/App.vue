<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter }
}

</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  font-family: Helvetica, sans-serif;
  color: #345;

  background: url('./assets/pattern.svg') repeat top;
}

a {
  color: #345;

  list-style: none;
  text-decoration: none;
}

img {
  display: block;

  max-width: 100%;
}

.btn {
  display: block;

  background: #87f;

  border-radius: 4px;
  border: none;

  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-family: Helvetica, sans-serif;

  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);

  transition: all 0.3s;

  padding: 10px 30px;

}

.btn:hover {
  background: #65d;

  transform: scale(1.1);
}

#app {
  display: flex;

  flex-direction: column;

  min-height: 100vh;
}

#main {
  flex: 1;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid #fff;

  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);

  font-size: 1rem;
  font-family: Helvetica, sans-serif;

  margin-bottom: 15px;
  padding: 15px;

  transition: all .3s;
}

input:hover,
textarea:hover,
input:focus,
input:focus {
  outline: none;

  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0)
}

.v-leave-to {
  transform: translate3d(0, 20px, 0)
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
