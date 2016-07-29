// Use different store for given environment
if (process.env.NODE_ENV === 'production') {
  console.log('PROD');
  module.exports = require('./configureStore.prod');
} else {
	console.log('DEV');
  module.exports = require('./configureStore.dev');
}
