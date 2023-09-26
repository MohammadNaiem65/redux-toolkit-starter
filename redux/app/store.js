const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const usersReducer = require('../users/usersSlice');

const logger = createLogger();

// Create store
const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: (defaultMiddleware) => {
		return defaultMiddleware().concat(logger);
	},
});

module.exports = store;
