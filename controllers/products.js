exports.getAddProductsPage = (req, res, next) => {
    res.render('add-products', {
        page: {
            pageUrl: req.originalUrl,
            meta: {
                title: 'Add products - Sneaker Hype',
                description: 'Add products to store'
            }
        }
    });
};

exports.postAddProduct = (req, res, next) => {
    res.redirect('/');
};
