module.exports = (app) => {
    app.use('/admin', require('./admin/products'));
    app.use('/', require('./home/home'));
    app.use('*', require('./404/404'));
};
