import server from './server';

server('localhost', process.env.NODE_PORT ?? 5000).catch(e => {
	console.error(e.message);
});
