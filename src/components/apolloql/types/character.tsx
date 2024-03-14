import { Episode } from './episode';
import { Location } from './location';

export type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Location;
	location: Location;
	image: string;
	episode: Episode[];
	created: string;
};
