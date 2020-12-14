const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const { app, server } = require('./app');
const mongoose = require('mongoose');

const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.bhgas.mongodb.net/test', {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    if (config.dev) {
      const builder = new Builder(nuxt);
      await builder.build();
    } else {
      await nuxt.ready();
    }

    app.use(nuxt.render);

    server.listen(PORT, () => {
      consola.ready({
        message: `Server listening on http://${host}:${PORT}`,
        badge: true,
      });
    });
  } catch (e) {
    console.log(e);
  }
}
start();
