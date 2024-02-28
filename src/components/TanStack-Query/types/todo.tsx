export interface TodoRemote {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface TodoLocal {
	id?: number;
	title: string;
	description: string;
	checked: boolean;
}
