import {uuid} from 'uuidv4';

type Note = {
	id?: string;
	name: string;
	body: string;
	tags: string[];
	createdAt?: Date;
	updatedAt?: Date;
};

const notes: Note[] = [];

function create(note: Note): Note {
	note.id = uuid().toString();
	note.createdAt = new Date();
	note.updatedAt = new Date();

	notes.push(note);
	return note;
}

function getAll(): Note[] {
	return notes;
}

function getNote(id: string) {
	const note = notes.filter(value => value.id === id)[0];
	if (note === undefined) {
		throw new Error('Note not found');
	}

	return note;
}

function update(note: Note, id: string) {
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

function del(id: string) {
	const noteIdx = notes.findIndex(value => value.id === id);
	if (noteIdx === -1) {
		throw new Error('Note not found');
	}

	notes.splice(noteIdx, 1);
}

export {del, getAll, update, getNote, create, type Note};
