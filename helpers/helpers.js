const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getName', () => {
    return 'Daniel';
});

//No hace falta exportarlos porque ya son metodos de hbs