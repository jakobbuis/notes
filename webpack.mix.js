let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/').vue();
mix.postCss('src/app.css', 'dist/', [
    require('tailwindcss'),
]).sourceMaps();

mix.copy('src/index.html', 'dist/');
mix.copy('assets/*', 'dist/');

mix.disableSuccessNotifications();
