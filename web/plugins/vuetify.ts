// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const myCustomTheme = {
  dark: false,
  colors: {
    background: '#C5CAE9',
    surface: '#FFFFFF',
    primary: '#303F9F',
    secondary: '#1A237E',
    tertiary: '#5C6BC0',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
