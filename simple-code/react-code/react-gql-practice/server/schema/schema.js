//Core
const graphql = require('graphql');
//Models
const Movies = require('../models/movie');
const Directors = require('../models/director');

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;

const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: new GraphQLNonNull(GraphQLString) },
		genre: { type: new GraphQLNonNull(GraphQLString) },
		watched: { type: new GraphQLNonNull(GraphQLBoolean) },
		rate: { type: GraphQLInt },
		director: {
			type: DirectorType,
			resolve({ directorId }, args) {
				return Directors.findById(directorId);
			},
		},
	}),
});

const DirectorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: new GraphQLNonNull(GraphQLString) },
		age: { type: new GraphQLNonNull(GraphQLInt) },
		movies: {
			type: new GraphQLList(MovieType),
			resolve({ id }, args) {
				return Movies.find({ directorId: id });
			},
		},
	}),
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addDirector: {
			type: DirectorType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, { name, age }) {
				const director = new Directors({ name, age });

				return director.save();
			},
		},

		deleteDirector: {
			type: DirectorType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, { id }) {
				return Directors.findByIdAndRemove(id);
			},
		},

		updateDirector: {
			type: DirectorType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, { id, name, age }) {
				return Directors.findByIdAndUpdate(
					id,
					{ $set: { name, age } },
					{ new: true },
				);
			},
		},

		addMovie: {
			type: MovieType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				genre: { type: new GraphQLNonNull(GraphQLString) },
				watched: { type: new GraphQLNonNull(GraphQLBoolean) },
				rate: { type: GraphQLInt },
				directorId: { type: GraphQLID },
			},

			resolve(parent, { name, genre, watched, rate, directorId }) {
				const movie = new Movies({ name, genre, watched, rate, directorId });

				return movie.save();
			},
		},

		deleteMovie: {
			type: MovieType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, { id }) {
				return Movies.findByIdAndRemove(id);
			},
		},

		updateMovie: {
			type: MovieType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
				genre: { type: new GraphQLNonNull(GraphQLString) },
				watched: { type: new GraphQLNonNull(GraphQLBoolean) },
				rate: { type: GraphQLInt },
				directorId: { type: GraphQLID },
			},
			resolve(parent, { id, name, genre, watched, rate, directorId }) {
				return Movies.findByIdAndUpdate(
					id,
					{ $set: { name, genre, watched, rate, directorId } },
					{ new: true },
				);
			},
		},
	},
});

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Movies.findById(id);
			},
		},

		movies: {
			type: new GraphQLList(MovieType),
			args: { name: { type: GraphQLString } },
			resolve(parent, { name }) {
				return Movies.find({ name: { $regex: name, $options: 'i' } });
			},
		},

		director: {
			type: DirectorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Directors.findById(id);
			},
		},

		directors: {
			type: new GraphQLList(DirectorType),
			args: { name: { type: GraphQLString } },
			resolve(parent, { name }) {
				return Directors.find({ name: { $regex: name, $options: 'i' } });
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: Query,
	mutation: Mutation,
});
