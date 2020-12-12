//Core
import { useState, useRef, useContext, createContext } from 'react';

import React from 'react';

interface Props {}

const Hooks = (props: Props) => {
	//useState
	const [value1, setValue1] = useState(0);

	const [value2, setValue2] = useState<number | undefined>(undefined);
	const [value3, setValue3] = useState<Array<number>>([]);

	interface IUser {
		name: string;
		age?: number;
	}

	const [value4, setValue4] = useState<IUser>({ name: 'Vitaliy' });

	//useRef
	const ref1 = useRef<HTMLElement>(null!);
	const ref2 = useRef<HTMLElement | null>(null);

	//useContext
	interface ITheme {
		backgroundColor: string;
		color: string;
	}

	const ThemeContext = createContext<ITheme>({
		backgroundColor: 'black',
		color: 'white',
	});

	const themeContext = useContext<ITheme>(ThemeContext);

	return <div></div>;
};

export default Hooks;
