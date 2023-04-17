import {type ServerRoute} from '@hapi/hapi/lib/types/route';
import {type ResponseToolkit} from '@hapi/hapi';
import type AppServer from '../server';
import {NoteControllerImpl} from '../controller/note_controller';
import {type NoteController} from '../domain';

function routes(server: AppServer) {
	const noteController: NoteController = new NoteControllerImpl(server.noteUsecase);
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
			handler: noteController.createNote.bind(noteController),
		},
		{
			path: '/notes',
			method: 'GET',
			handler: noteController.getAllNotes.bind(noteController),
		},
		{
			path: '/notes/{id}',
			method: 'GET',
			handler: noteController.getNote.bind(noteController),
		},
		{
			path: '/notes/{id}',
			method: 'PUT',
			handler: noteController.updateNote.bind(noteController),
		},
		{
			path: '/notes/{id}',
			method: 'DELETE',
			handler: noteController.deleteNote.bind(noteController),
		},
	];

	server.server.route(routes);
}

export default routes;
