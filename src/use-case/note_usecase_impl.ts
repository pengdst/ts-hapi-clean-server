import {type NoteRepository} from '../domain/note_repository';
import {
	type HttpResponse,
	type Note,
	type NoteData, type NotePayload, type NotesData,
	type NoteUsecase,
} from '../domain/note_usecase';
import {type NoteDto} from '../repository/model';

function handleError(e: unknown) {
	let message = 'internal server error.';
	if (e instanceof Error) {
		message = `${message} ${e.message}`;
	}

	return {
		code: 500,
		message,
	};
}

export class NoteUsecaseImpl implements NoteUsecase {
	constructor(private readonly noteRepository: NoteRepository) {

	}

	createNote(payload: NotePayload): HttpResponse<NoteData> {
		try {
			let noteDto: NoteDto = {
				name: payload.name,
				body: payload.body,
				tags: payload.tags,
			};

			noteDto = this.noteRepository.create(noteDto);

			const note: Note = {
				id: noteDto.id,
				name: noteDto.name,
				body: noteDto.body,
				tags: noteDto.tags,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				created_at: noteDto.createdAt,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				updated_at: noteDto.updatedAt,
			};

			return {
				code: 201,
				message: 'success create note',
				data: {
					note,
				},
			};
		} catch (e) {
			return handleError(e);
		}
	}

	delete(id: string): HttpResponse {
		try {
			this.noteRepository.delete(id);
			return {
				code: 200,
				message: 'success create note',
			};
		} catch (e) {
			return handleError(e);
		}
	}

	get(id: string): HttpResponse<NoteData> {
		try {
			const noteDto = this.noteRepository.get(id);
			const note: Note = {
				id: noteDto.id,
				name: noteDto.name,
				body: noteDto.body,
				tags: noteDto.tags,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				created_at: noteDto.createdAt,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				updated_at: noteDto.updatedAt,
			};
			return {
				code: 200,
				message: 'success create note',
				data: {
					note,
				},
			};
		} catch (e) {
			return handleError(e);
		}
	}

	getAll(): HttpResponse<NotesData> {
		try {
			const notes: Note[] = this.noteRepository.getAll().map(value => ({
				id: value.id,
				name: value.name,
				body: value.body,
				tags: value.tags,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				created_at: value.createdAt,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				updated_at: value.updatedAt,
			}));

			return {
				code: 201,
				message: 'success create note',
				data: {
					notes,
				},
			};
		} catch (e) {
			return handleError(e);
		}
	}

	update(payload: NotePayload, id: string): HttpResponse<NoteData> {
		try {
			let noteDto: NoteDto = {
				name: payload.name,
				body: payload.body,
				tags: payload.tags,
			};

			noteDto = this.noteRepository.update(noteDto, id);

			const note: Note = {
				id: noteDto.id,
				name: noteDto.name,
				body: noteDto.body,
				tags: noteDto.tags,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				created_at: noteDto.createdAt,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				updated_at: noteDto.updatedAt,
			};

			return {
				code: 201,
				message: 'success create note',
				data: {
					note,
				},
			};
		} catch (e) {
			return handleError(e);
		}
	}
}
