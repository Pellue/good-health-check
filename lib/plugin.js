``let plugin = {};

const opts = {

	includes: {
		request: ['headers', 'payload'],
		response: ['payload']
	},
	ops: {
		interval: 60000
	},
	reporters: {
		consoleReporter: [{
			module: 'good-squeeze',
			name: 'Squeeze',
			args: [{
				request: '*',
				response: '*',
				ops: '*',
				log: '*',
				error: '*'
			}]
		}, {
			module: require('./good-filter'),
			args: [{
				request: '*',
				response: '*',
				log: '*',
				error: '*'
			}]
		}, {
			module: 'good-console',
			args: [{
				color: false,
			}]
		}, 'stdout']
	}
};

plugin.register = function (server, optinos, next) {
	server.register({
		register: require('good'),
		options: opts
	}, (err) => {
		if (err) {
			throw err;
		}
	});

	next();
};

plugin.register.attributes = {
	pkg: require('../package.json')
}

exports.register = plugin.register
