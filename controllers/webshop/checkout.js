exports.getCheckout = (req, res, next) => {
    res.render('webshop/checkout', {
        page: {
            pageUrl: req.originalUrl,
            meta: {
                title: 'Checkout',
                description: 'Checkout description'
            }
        }
    });
};
