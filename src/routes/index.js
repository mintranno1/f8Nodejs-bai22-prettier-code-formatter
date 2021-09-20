const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //nạp tat ca router lien quan den news từ -> news.js
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
