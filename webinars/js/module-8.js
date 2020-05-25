'use strict';
//!============ВСПЛЫТИЕ СОБЫТИЙ===============

//==============NAVIGATION=================
const nav = document.querySelector('.js-nav');

nav.addEventListener('click', handleNavClick);

function handleNavClick(e) {
	e.preventDefault();

	if (e.target === e.currentTarget) {
		return;
	}

	const currentLink = e.target;
	const activeLink = e.currentTarget.querySelector('.nav__link--active');

	if (activeLink) {
		activeLink.classList.remove('nav__link--active');
	}
	currentLink.classList.add('nav__link--active');
}

//================TAGS======================
const tagList = document.querySelector('.js-tags');

tagList.addEventListener('click', handleTagClick);

function handleTagClick(e) {
	if (e.target === e.currentTarget) {
		return;
	}

	const element = e.target;
	element.classList.toggle('tags__link--active');
}

//================TODO======================
const todos = {
	items: [],

	add(text) {
		const todo = {
			id: Date.now(),
			text,
		};

		this.items.push(todo);

		return todo;
	},

	delete(id) {
		this.items = this.items.filter(item => item.id !== id);
	},
};

const refs = {
	editor: document.querySelector('.js-editor'),
	todoList: document.querySelector('.js-todo-list'),
};

refs.editor.addEventListener('submit', handleEditorSubmit);
refs.todoList.addEventListener('click', handleTodoListClick);

function handleEditorSubmit(e) {
	e.preventDefault();

	const form = e.currentTarget;
	const inputValue = form.elements.text.value;

	const todo = todos.add(inputValue);
	const todoMarkup = buildTodoItem(todo);
	appendTodoItem(refs.todoList, todoMarkup);

	form.reset();
}

function buildTodoItem(item) {
	return `
    <li class="todo-list__item" data-id="${item.id}">
    <div class="todo">
        <p class="todo__text">${item.text}</p>
        <div class="todo__action">
            <button class="button" type="button">Удалить</button>
        </div>
    </div>
    </li>
    `;
}

function appendTodoItem(parentRef, todoEl) {
	parentRef.insertAdjacentHTML('beforeend', todoEl);
}

function handleTodoListClick(e) {
	if (e.target.nodeName !== 'BUTTON') {
		return;
	}

	const button = e.target;
	const parentLi = button.closest('li.todo-list__item');
	const todoId = Number(parentLi.dataset.id);

	todos.delete(todoId);
	parentLi.remove();
}
