export type NoteDto = {
	id?: string;
	name: string;
	body: string;
	tags: string[];
	createdAt?: Date;
	updatedAt?: Date;
};
