
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {registerPlugins} from '@/plugins';

const app = createApp(App)
app.use(createPinia());
app.use(router);
registerPlugins(app);
app.mount('#app')
