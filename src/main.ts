/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#000000', // Black
                    secondary: '#333333', // Dark Gray
                    accent: '#CCCCCC', // Light Gray
                    error: '#FF0000', // Red
                    info: '#999999', // Light Gray
                    success: '#006400', // Dark Green
                    warning: '#FFD700', // Dark Yellow
                }
            },
            dark: {
                dark: true,
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
