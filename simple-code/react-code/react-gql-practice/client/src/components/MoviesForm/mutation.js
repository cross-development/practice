//Core
import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
	mutation(
		$name: String!
		$genre: String!
		$watched: Boolean!
		$rate: Int
		$directorId: ID
	) {
		addMovie(
			name: $name
			genre: $genre
			watched: $watched
			rate: $rate
			directorId: $directorId
		) {
			id
		}
	}
`;

export const updateMovieMutation = gql`
	mutation(
		$id: ID
		$name: String!
		$genre: String!
		$watched: Boolean!
		$rate: Int
		$directorId: ID
	) {
		updateMovie(
			id: $id
			name: $name
			genre: $genre
			watched: $watched
			rate: $rate
			directorId: $directorId
		) {
			id
		}
	}
`;
