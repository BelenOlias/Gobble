module.exports = app => {

    // Base URLS
    app.use('/api', require('./restaurants.routes.js'))
    app.use('/api', require('./auth.routes'))
    app.use('/api', require('./rating.routes'))
    app.use('/api', require('./comment.routes'))
    app.use('/api/files', require('./file.routes'))
}