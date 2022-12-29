import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingPage from '@/components/LoadingPage.vue'

Vue.config.productionTip = false

Vue.component('LoadingPage', LoadingPage);
Vue.filter('priceNumber', (value: string) => {
  const numberValue = Number(value);

  if (!isNaN(numberValue)) {
    return numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  } else {
    return 0;
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
