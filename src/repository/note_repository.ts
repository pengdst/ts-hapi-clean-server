import {uuid} from 'uuidv4';
import {type NoteRepository} from '../domain/note_repository';
import {type NoteDto} from './model';

export class NoteInMemoryRepository implements NoteRepository {
	public notes: NoteDto[];

	constructor() {
		this.notes = [];
	}

	create(note: NoteDto): NoteDto {
		const {notes} = this;
		note.id = uuid().toString();
		note.createdAt = new Date();

		note.updatedAt = new Date();
		notes.push(note);
		return note;
	}

	getAll(): NoteDto[] {
		const {notes} = this;
		return notes;
	}

	get(id: string): NoteDto {
		const {notes} = this;
		const note = notes.filter(value => value.id === id)[0];
		if (note === undefined) {
			throw new Error('Note not found');
		}

		return note;
	}

	update(note: NoteDto, id: string) {
		const {notes} = this;
		const noteIdx = notes.findIndex(value => value.id === id);
		if (noteIdx === -1) {
			throw new Error('Note not found');
		}

		const oldNote = notes[noteIdx];
		notes[noteIdx] = {
			...oldNote,
			name: note.name,
			body: note.body,
			tags: note.tags,
			updatedAt: new Date(),
		};

		return note;
	}

	delete(id: string) {
		const {notes} = this;
		const noteIdx = notes.findIndex(value => value.id === id);
		if (noteIdx === -1) {
			throw new Error('Note not found');
		}

		notes.splice(noteIdx, 1);
	}
}

export {type NoteDto};
