const postToAdd = {
	author: 'Cross',
	content: 'CRUD is awesome',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify(postToAdd),
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
	},
})
	.then(response => response.json())
	.then(post => console.log(post))
	.catch(error => console.log(error));
