'use strict';

const nav = document.querySelector('.page-nave');
const sections = document.querySelectorAll('.section');

const onEntry = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const sectionId = entry.target.getAttribute('id');

			const currentActiveLink = nav.querySelector('.page-nav__link--active');

			currentActiveLink &&
				currentActiveLink.classList.remove('page-nav__link--active');

			const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
			nextActiveLink.classList.add('page-nav__link--active');
		}
	});
};

const options = { threshold: 0.5 };

const observer = new IntersectionObserver(onEntry, options);
sections.forEach(section => observer.observe(section));
