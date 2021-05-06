const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
	method: 'DELETE',
})
	.then(() => console.log('success'))
	.catch(error => console.log('ERROR' + error));
