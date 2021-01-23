exports.get404Page = (req, res, next) => {
    res.status(404).render('404', {
        page: {
            pageUrl: '',
            meta: {
                title: '404 - Not found',
                description: 'There is no such page on this domain'
            }
        }
    });
};
