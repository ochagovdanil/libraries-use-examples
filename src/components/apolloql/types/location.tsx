import { Character } from './character';

export type Location = {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: Character[];
	created: string;
};
