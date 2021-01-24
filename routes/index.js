module.exports = (app) => {
    app.use('/', [require('./webshop/home'), require('./webshop/products'), require('./webshop/cart'), require('./webshop/checkout')]);
    app.use('/admin', require('./admin/products'));
    app.use('*', require('./404/404'));
};
