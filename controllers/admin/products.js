const Product = require('../../models/Product');

exports.getAddProductsPage = (req, res, next) => {
    res.render('admin/add-products', {
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
    const product = new Product(req.body.title, req.body.description);
    product.save();
    res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchProducts((products) => {
        res.render('admin/products', {
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
