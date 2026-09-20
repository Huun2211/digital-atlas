import { App } from './app/app';

const app = new App();
app.init().catch((err) => {
  console.error('Digital Atlas initialization failed:', err);
});
