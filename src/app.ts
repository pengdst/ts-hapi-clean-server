import Server from './server';

const server = new Server('localhost', process.env.NODE_PORT ?? 5000);
server.run();
