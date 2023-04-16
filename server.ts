import hapi from '@hapi/hapi';
import routes from './src/route';

const init = async () => {
	const server = hapi.server({
		port: process.env.NODE_PORT ?? 5000,
		host: 'localhost',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log(`Server running on ${server.info.uri}`);
};

init().catch(e => {
	console.error(e.message);
});
