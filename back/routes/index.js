const routes = require('express').Router();

// define the index route
routes.get('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Welcome to Express');
});

const adminRoutes = require('./admin');

routes.use('/admin', adminRoutes);

module.exports = routes;