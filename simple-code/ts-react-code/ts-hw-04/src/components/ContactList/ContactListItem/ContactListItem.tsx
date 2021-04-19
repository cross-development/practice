//Styles
import styles from './ContactListItem.module.css';

interface IProps {
	name: string;
	number: string;
	onRemove: () => void;
}

const ContactListItem = ({ name, number, onRemove }: IProps) => (
	<li className={styles.item}>
		<p className={styles.contact}>
			<span>{name}:</span> {number}
		</p>

		<button type="button" className={styles.button} onClick={onRemove}>
			Delete
		</button>
	</li>
);

export default ContactListItem;
