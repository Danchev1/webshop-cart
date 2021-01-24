exports.getHome = (req, res, next) => {
    res.render('webshop/index', {
        page: {
            pageUrl: req.originalUrl,
            meta: {
                title: 'Home',
                description: 'Home'
            }
        }
    });
};
