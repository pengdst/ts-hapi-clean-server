import hapi from '@hapi/hapi';
import routes from './routes/route';
import {NoteControllerImpl} from './controller/note_controller';
import {NoteUsecaseImpl} from './use-case/note_usecase_impl';
import {NoteInMemoryRepository} from './repository/note_repository';

export default class AppServer {
	public server: hapi.Server;
	public declare noteController: NoteControllerImpl;
	constructor(host: string, port: number | string) {
		this.server = hapi.server({
			port,
			host,
			routes: {
				cors: {
					origin: ['*'],
				},
			},
		});
	}

	run() {
		this.init().catch(e => {
			console.error(e.message);
		});
	}

	private async init() {
		const noteRepository = new NoteInMemoryRepository();
		const noteUsecase = new NoteUsecaseImpl(noteRepository);
		this.noteController = new NoteControllerImpl(noteUsecase);

		routes(this);

		await this.server.start();
		console.log(`Server running on ${this.server.info.uri}`);
	}
}
