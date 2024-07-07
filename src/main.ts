/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'
import colors from 'vuetify/util/colors'
import '@mdi/font/css/materialdesignicons.css';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                dark: true,
                colors: {
                    primary: colors.grey.darken4,
                    secondary: colors.grey.darken3,
                    accent: colors.grey.lighten1, // Light Gray
                    error: colors.red.darken3, // Red
                    info: colors.grey.lighten3, // Light Gray
                    success: colors.green.darken4, // Dark Green
                    warning: colors.yellow.darken4, // Dark Yellow
                }
            },
            dark: {
                dark: false,
                colors: {
                    primary: '#FFFFFF', // White
                    secondary: '#CCCCCC', // Light Gray
                    accent: '#333333', // Dark Gray
                    error: '#FF0000', // Red
                    info: '#999999', // Light Gray
                    success: '#006400', // Dark Green
                    warning: '#FFD700', // Dark Yellow
                }
            }
        }
    }
});

const app = createApp(App)

registerPlugins(app)

app.use(vuetify).mount('#app')
