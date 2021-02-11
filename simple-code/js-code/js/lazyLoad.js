const lazyLoad = target => {
	const options = { rootMargin: '50px 0px', threshold: 0.01 };

	const intersectionObs = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const imgURL = img.dataset.lazy;

				img.setAttribute('src', imgURL);
				img.classList.add('fade-in');

				observer.disconnect();
			}
		});
	}, options);

	intersectionObs.observe(target);
};

const images = document.querySelectorAll('.section img');
images.forEach(image => lazyLoad(image));
