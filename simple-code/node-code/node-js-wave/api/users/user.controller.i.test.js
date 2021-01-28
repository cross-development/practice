const request = require('supertest');
const app = require('../../server/server');

describe('GET /user', () => {
	it('responds with success status code', async () => {
		const result = await request(app)
			.get('/users')
			.set('Authorization', 'Bearer qweq43865454drsfesgwe');

		expect(result.statusCode).toBe(400);
	});
});

describe('GET /user/:id', () => {
	it('responds with body and has name Michael', async () => {
		const result = await request(app)
			.get('/users/qwead12424214wqerqwrqwr')
			.set('Authorization', 'Bearer qweqwe');

		console.log('results', result);

		expect(result.body.name).toBe('Michael');
	});
});
