const postId = 1;
const postToUpdate = {
	content: 'CRUD is really awesome',
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
	method: 'PATCH',
	body: JSON.stringify(postToUpdate),
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
	},
})
	.then(response => response.json())
	.then(post => console.log(post))
	.catch(error => console.log('ERROR' + error));
