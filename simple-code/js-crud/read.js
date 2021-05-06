//Делаем запрос на все посты.

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(posts => console.log(posts))
	.catch(error => console.log(error));

//Просим один пост по id, например пост с id=1
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	.then(response => response.json())
	.then(post => console.log(post))
	.catch(error => console.log(error));
