const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    new InjectManifest({
      swSrc: './src/src-sw.js', // La ruta debe ser correcta
      swDest: 'sw.js',
    }),
  ],
};
