import type hapi from '@hapi/hapi';
import {type NotePayload} from './note_usecase';

export type CreateNoteRequest = {
	payload: NotePayload;
} & Request;

export type UpdateNoteRequest = {
	payload: NotePayload;
} & hapi.Request;

export type NoteController = {
	createNote(request: CreateNoteRequest, h: hapi.ResponseToolkit): hapi.ResponseObject;
	updateNote(request: UpdateNoteRequest, h: hapi.ResponseToolkit): hapi.ResponseObject;
	deleteNote(request: hapi.Request, h: hapi.ResponseToolkit): hapi.ResponseObject;
	getAllNotes(request: hapi.Request, h: hapi.ResponseToolkit): hapi.ResponseObject;
	getNote(request: hapi.Request, h: hapi.ResponseToolkit): hapi.ResponseObject;
};
