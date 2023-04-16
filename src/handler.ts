import type hapi from '@hapi/hapi';
import {create, getAll, get, type Note, update, del} from './note_repository';

type CreateNotePayload = {
	name?: string;
	body?: string;
	tags: string[];
};
type CreateNoteRequest = {
	payload: CreateNotePayload;
} & Request;

function createNotes(request: CreateNoteRequest, h: hapi.ResponseToolkit) {
	// eslint-disable-next-line prefer-destructuring
	const payload: CreateNotePayload = request.payload;
	let note: Note = {
		body: payload.body ?? '',
		name: payload.name ?? '',
		tags: payload.tags,
	};
	note = create(note);
	return h.response({
		code: 200,
		data: {
			note,
		},
		message: 'success creating note',
	});
}

function getNotes(request: hapi.Request, h: hapi.ResponseToolkit) {
	const notes = getAll();
	return h.response({
		code: 200,
		data: {
			notes,
		},
		message: 'success get notes',
	});
}

function getNote(request: hapi.Request, h: hapi.ResponseToolkit) {
	const {id} = request.params;
	const note = get(id);

	return h.response({
		code: 200,
		data: {
			note,
		},
		message: 'success get note',
	});
}

type UpdateNotePayload = {
	name: string | undefined;
	body: string | undefined;
	tags: string[];
};
type UpdateNoteRequest = {
	payload: UpdateNotePayload;
} & hapi.Request;

function updateNote(request: UpdateNoteRequest, h: hapi.ResponseToolkit) {
	const {id} = request.params;
	const {payload} = request;
	let note: Note = {
		body: payload.body ?? '',
		name: payload.name ?? '',
		tags: payload.tags,
	};
	note = update(note, id);

	return h.response({
		code: 200,
		data: {
			note,
		},
		message: 'success update notes',
	});
}

function deleteNote(request: hapi.Request, h: hapi.ResponseToolkit) {
	const {id} = request.params;
	del(id);
	return h.response({
		code: 200,
		message: 'success delete notes',
	});
}

export {createNotes, deleteNote, updateNote, getNotes, getNote};
