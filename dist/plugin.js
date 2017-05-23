let plugin = {
	register: (server, options, next) => {

		//todo: user dependencies in attributes
		//todo: https://github.com/hapijs/hapi/issues/2332
		// server.dependency('plip-auth-jwt', after);
		// internals.applyRoutes(server, next);

		server.route({
			method: 'GET',
			path: '/_ah/health',
			config: {
				tags: ['health'],
				plugins: {
					good: {
						suppressResponseEvent: true
					}
				},
				handler: (request, reply) => {
					reply({ message: 'ok' });
				}
			}
		});

		next();
	}
};

plugin.register.attributes = {
	pkg: require('./package.json')
};

exports.register = plugin.register;