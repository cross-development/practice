'use strict';

//key of user - login
class Auth {
	constructor() {
		this.users = {};
	}

	checkIsUserExist(login) {
		const userLogin = Object.keys(this.users).find(userLogin => userLogin === login);

		return userLogin !== undefined;
	}

	checkIsPasswordCorrect(login, password) {
		const user = this.users[login];

		return user.password === password;
	}

	authenticate(login) {
		this.users[login].isAuth = true;
	}

	login(login, password) {
		const isUserExist = this.checkIsUserExist(login);
		if (!isUserExist) {
			console.log('login is incorrect');
			return;
		}

		const isPasswordCorrect = this.checkIsPasswordCorrect(login, password);
		if (!isPasswordCorrect) {
			console.log('password is incorrect');
			return;
		}

		this.authenticate(login);
		console.log('auth complete');
	}

	register(login, password, repeatPassword) {
		const existedLogin = Object.keys(this.users).find(existedLogin => existedLogin === login);

		if (existedLogin !== undefined) {
			console.log('Login is busy');
			return;
		}

		if (password !== repeatPassword) {
			console.log('passwords are different');
			return;
		}

		this.users[login] = {
			password,
			isAuth: false,
		};
	}
}

const auth = new Auth();
auth.register('asd', 'pass', 'pass');
auth.register('asd2', 'pass2', 'pass2');

auth.login('asd', 'pass');
auth.login('asd2', 'pass2');

{
	// class AuthWithCaptcha extends Auth {
	// 	emulateCaptcha() {
	// 		return Math.random() > 0.5;
	// 	}
	// 	login(login, password) {
	// 		const isUserExist = super.checkIsUserExist(login);
	// 		if (!isUserExist) {
	// 			console.log('login is incorrect');
	// 			return;
	// 		}
	// 		const isPasswordCorrect = super.checkIsPasswordCorrect(login, password);
	// 		if (!isPasswordCorrect) {
	// 			console.log('password is incorrect');
	// 			return;
	// 		}
	// 		const isUserDoneCaptcha = this.emulateCaptcha();
	// 		if (!isUserDoneCaptcha) {
	// 			console.log('captha is incorrect');
	// 			return;
	// 		}
	// 		super.authenticate(login);
	// 		console.log('auth complete');
	// 	}
	// }
	// const authWithCaptcha = new AuthWithCaptcha();
	// authWithCaptcha.register('asd', 'pass', 'pass');
	// authWithCaptcha.login('asd', 'pass');
}
