import Server from './server';

const server = new Server(process.env.NODE_HOST ?? 'localhost', process.env.NODE_PORT ?? 5000);
server.run();
