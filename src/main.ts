/**
 * Main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';
import store from './store';
// Composables
import {createApp} from 'vue';

// Plugins
import {registerPlugins} from '@/plugins';

const app = createApp(App);
app.use(store);
registerPlugins(app);

app.mount('#app');
