//Core
import React, { Component } from 'react';
//Components
import Spinner from './Spinner';
import Notification from './Notification';
import ArticleList from './ArticleList';
import SearchForm from './SearchForm';
//Utils
import articlesApi from '../utils/articlesApi';

export default class App extends Component {
	state = {
		articles: [],
		loading: false,
		error: null,
		searchQuery: '',
		page: 0,
	};

	componentDidUpdate(prevProps, prevState) {
		const prevQuery = prevState.searchQuery;
		const nextQuery = this.state.searchQuery;

		if (prevQuery !== nextQuery) {
			this.fetchArticles();
		}

		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	}

	fetchArticles = () => {
		const { searchQuery, page } = this.state;

		this.setState({ loading: true });

		articlesApi
			.fetchArticlesWithQuery(searchQuery, page)
			.then(articles =>
				this.setState(prevState => ({
					articles: [...prevState.articles, ...articles],
					page: prevState.page + 1,
				})),
			)
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	};

	handleSearchFormSubmit = query => {
		this.setState({ searchQuery: query, page: 0, articles: [] });
	};

	render() {
		const { articles, loading, error } = this.state;

		return (
			<>
				<SearchForm onSubmit={this.handleSearchFormSubmit} />

				{error && <Notification message={`Woops, something went wrong: ${error.message}`} />}

				{articles.length > 0 && <ArticleList articles={articles} />}

				{loading && <Spinner message="Loading" />}

				{articles.length > 0 && !loading && (
					<button type="submit" onClick={this.fetchArticles}>
						Load more
					</button>
				)}
			</>
		);
	}
}
