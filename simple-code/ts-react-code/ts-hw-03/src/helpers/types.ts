type TDefaultTags = 'Photo from Pixabay';

export type TImage = {
	id: string;
	webformatURL: string;
	largeImageURL: string;
	tags: string | TDefaultTags;
};
