interface IUser {
	name: string;
	age: number;
	hobby: string;
	premium: boolean;
	[index: string]: number | string | boolean;
}

const user: IUser = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};

user.hobby = 'skydiving';
user.premium = false;

type TObj = (obj: IUser) => void;

const showObjectProp: TObj = obj => {
	const keys: string[] = Object.keys(obj);

	for (const key of keys) {
		console.log(`${key} : ${user[key]}`);
	}
};

showObjectProp(user);
