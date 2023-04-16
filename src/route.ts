import {type ServerRoute} from '@hapi/hapi/lib/types/route';
import {type ResponseToolkit} from '@hapi/hapi';
import {
	createNotes,
	deleteNote,
	getNote,
	getNotes,
	updateNote,
} from './handler';

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
		handler: createNotes,
	},
	{
		path: '/notes',
		method: 'GET',
		handler: getNotes,
	},
	{
		path: '/notes/{id}',
		method: 'GET',
		handler: getNote,
	},
	{
		path: '/notes/{id}',
		method: 'PUT',
		handler: updateNote,
	},
	{
		path: '/notes/{id}',
		method: 'DELETE',
		handler: deleteNote,
	},
];

export default routes;
