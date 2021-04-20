//Packages
import queryString, { ParsedQuery } from 'query-string';

function getQueryString(query: string): ParsedQuery<string> {
	return queryString.parse(query);
}

export { getQueryString };
