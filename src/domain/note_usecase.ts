export type Note = {
	id: string | undefined;
	name: string;
	body: string;
	tags: string[];
	created_at: Date | undefined;
	updated_at: Date | undefined;
};

export type NotePayload = {
	name: string;
	body: string;
	tags: string[];
};

export type NotesData = {
	notes: Note[];
};

export type NoteData = {
	note: Note;
};

export type HttpResponse<T = void> = {
	code: number;
	message: string;
	data?: T;
};

export type NoteUsecase = {
	delete(id: unknown): HttpResponse;
	getAll(): HttpResponse<NotesData>;
	update(payload: NotePayload, id: unknown): HttpResponse<NoteData>;
	get(id: unknown): HttpResponse<NoteData>;
	createNote(payload: NotePayload): HttpResponse<NoteData>;
};
