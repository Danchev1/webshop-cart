exports.getHomePage = (req, res, next) => {
    res.render('home', {
        page: {
            pageUrl: req.originalUrl,
            meta: {
                title: 'Sneaker Hype - Online shop for designer sneakers',
                description: 'We offer sneakers and merch from limited time capsule collection'
            }
        },
        products: []
    });
};
