//Packages
import queryString from 'query-string';

function getQueryString(query: string): string {
	const parsedQuery = queryString.parse(query);

	return queryString.stringify(parsedQuery);
}

export { getQueryString };
