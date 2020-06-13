'use strict';
//!======================== DOM ===================
const button = document.querySelector('.js-magic-button');
const image = document.querySelector('.unsplash-image');
const menuItems = document.querySelectorAll('.menu-item');
const homeMenuItem = document.querySelector('.menu-item');

button.style.backgroundColor = '#212121';

button.addEventListener('click', () => {
	image.getAttribute('src');
	updateImage();
	setActiveItem();
	toggleActiveItem();
});

function updateImage() {
	// image.alt = 'cool image';
	image.setAttribute('alt', 'cool image');
	image.setAttribute(
		'src',
		'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq',
	);
}

function setActiveItem() {
	homeMenuItem.classList.add('active');
}

function toggleActiveItem() {
	homeMenuItem.classList.add('active');
}
