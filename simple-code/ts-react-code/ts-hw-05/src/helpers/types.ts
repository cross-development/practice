export type TCast = {
	cast_id: number;
	name: string;
	profile_path: string | null;
};

export type TReview = {
	id: number;
	author: string;
	content: string;
	url: string;
};

export type TMovieData = {
	id: number;
	poster_path: string | null;
	name: string;
	title: string;
	vote_average: number;
};

type TGenre = { id: number; name: string };

export type TMovieDetails = {
	poster_path: string | null;
	title: string;
	name: string;
	release_date: string;
	popularity: number;
	overview: string | null;
	genres: TGenre[];
};
