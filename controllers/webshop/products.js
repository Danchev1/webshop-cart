const Product = require('../../models/Product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchProducts((products) => {
        res.render('webshop/products', {
            page: {
                pageUrl: req.originalUrl,
                meta: {
                    title: 'Sneaker Hype - Online shop for designer sneakers',
                    description: 'We offer sneakers and merch from limited time capsule collection'
                }
            },
            products
        });
    });
};
