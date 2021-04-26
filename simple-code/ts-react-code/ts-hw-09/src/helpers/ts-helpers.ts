export type TUser = {
	name: string;
	email: string;
};

export interface IAuth {
	user: TUser;
	token: string;
	error: null | any;
}

export type TContact = {
	id: string;
	name: string;
	number: string;
};

export interface IContact {
	items: TContact[];
	filter: string;
	loading: boolean;
}

export interface IStoreState {
	auth: IAuth;
	contacts: IContact;
}
