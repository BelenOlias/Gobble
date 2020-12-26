module.exports = app => {

    // Base URLS
    app.use('/api', require('./restaurants.routes.js'))
    app.use('/api', require('./auth.routes'))
}