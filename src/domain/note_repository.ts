import {type NoteDto} from '../repository/model';

export type NoteRepository = {
	delete(id: string): void;
	getAll(): NoteDto[];
	update(note: NoteDto, id: string): NoteDto;
	get(id: string): NoteDto;
	create(note: NoteDto): NoteDto;
};
