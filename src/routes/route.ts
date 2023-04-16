import {type ServerRoute} from '@hapi/hapi/lib/types/route';
import {type ResponseToolkit} from '@hapi/hapi';
import type AppServer from '../server';

function routes(server: AppServer) {
	const routes: ServerRoute[] = [
		{
			path: '/healthcheck',
			method: 'GET',
			handler(request: Request, h: ResponseToolkit) {
				return h.response({
					message: 'ok',
					code: 200,
				}).code(200);
			},
		},
		{
			path: '/notes',
			method: 'POST',
			handler: server.noteController.createNote,
		},
		{
			path: '/notes',
			method: 'GET',
			handler: server.noteController.getAllNotes,
		},
		{
			path: '/notes/{id}',
			method: 'GET',
			handler: server.noteController.getNote,
		},
		{
			path: '/notes/{id}',
			method: 'PUT',
			handler: server.noteController.updateNote,
		},
		{
			path: '/notes/{id}',
			method: 'DELETE',
			handler: server.noteController.deleteNote,
		},
	];

	server.server.route(routes);
}

export default routes;
