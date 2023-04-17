import type hapi from '@hapi/hapi';
import {
	type CreateNoteRequest,
	type NoteController, type UpdateNoteRequest,
} from '../domain/note_controller';
import {type NoteUsecase} from '../domain';
import {bindMethods} from './utils';

export class NoteControllerImpl implements NoteController {
	constructor(private readonly noteUsecase: NoteUsecase) {
		bindMethods(this);
	}

	createNote(
		request: CreateNoteRequest,
		h: hapi.ResponseToolkit): hapi.ResponseObject {
		const response = this.noteUsecase.createNote(request.payload);
		return h.response(response).code(response.code);
	}

	deleteNote(
		request: hapi.Request, h: hapi.ResponseToolkit): hapi.ResponseObject {
		const {id} = request.params;
		const response = this.noteUsecase.delete(id);
		return h.response(response).code(response.code);
	}

	getNote(request: hapi.Request, h: hapi.ResponseToolkit) {
		const {id} = request.params;
		const response = this.noteUsecase.get(id);
		return h.response(response).code(response.code);
	}

	getAllNotes(
		request: hapi.Request, h: hapi.ResponseToolkit): hapi.ResponseObject {
		const response = this.noteUsecase.getAll();
		return h.response(response).code(response.code);
	}

	updateNote(
		request: UpdateNoteRequest,
		h: hapi.ResponseToolkit): hapi.ResponseObject {
		const {id} = request.params;
		const response = this.noteUsecase.update(request.payload, id);
		return h.response(response).code(response.code);
	}
}
