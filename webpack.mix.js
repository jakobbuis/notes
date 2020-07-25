let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/');
mix.postCss('src/app.css', 'dist/', [
    require('tailwindcss'),
]);

mix.copy('src/index.html', 'dist/');

mix.disableSuccessNotifications();
