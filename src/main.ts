import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import do prime vue 
import PrimeVue from 'primevue/config';

// imports do css do primevue
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css';

// imports dos componentes do prime vue
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

//.component('nome do componente', nome do import do componente)
createApp(App)
  .use(router, PrimeVue)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('InputText', InputText)
  .mount('#app');
