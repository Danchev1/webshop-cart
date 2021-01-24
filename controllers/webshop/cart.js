exports.getCart = (req, res, next) => {
    res.render('webshop/cart', {
        page: {
            pageUrl: req.originalUrl,
            meta: {
                title: 'Cart',
                description: 'Cart description'
            }
        }
    });
};
