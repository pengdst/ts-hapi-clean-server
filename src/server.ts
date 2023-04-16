import hapi from '@hapi/hapi';
import routes from './routes/route';

const init = async (host: string, port: string | number) => {
	const server = hapi.server({
		port,
		host,
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

export default init;
