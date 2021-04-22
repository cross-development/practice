//HOC
import withTheme from 'helpers/hoc/withTheme';
//Helpers
import { TContact } from 'helpers/types';
import { IContext } from 'helpers/interfaces';
//Styles
import styles from './ContactListItem.module.css';

interface IProps {
	contact: TContact;
	ctxTheme: IContext;
	onRemove: (id: string) => void;
}

const ContactListItem = ({ contact, onRemove, ctxTheme }: IProps) => {
	const { id, name, number } = contact;
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<li className={styles.listItem} style={mainThemeStyle}>
			<p className={styles.contact}>
				<span>{name}:</span> {number}
			</p>
			<button
				type="button"
				className={styles.button}
				onClick={() => onRemove(id)}
			>
				&#10006;
			</button>
		</li>
	);
};

export default withTheme(ContactListItem);
