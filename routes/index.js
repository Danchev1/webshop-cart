module.exports = app => {
  app.use('/admin', require('./admin/admin'));
  app.use('/', require('./webshop/webshop'));
  app.use('*', require('./404/404'));
};
