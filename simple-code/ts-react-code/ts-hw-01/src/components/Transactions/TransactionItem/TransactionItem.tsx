//Styles
import styles from './TransactionItem.module.css';

interface IProps {
	type: string;
	amount: string;
	currency: string;
}

const TransactionItem = ({ type, amount, currency }: IProps) => (
	<tr className={styles.transactionRow}>
		<td className={styles.transactionRowItem}>{type}</td>
		<td className={styles.transactionRowItem}>{amount}</td>
		<td className={styles.transactionRowItem}>{currency}</td>
	</tr>
);

export default TransactionItem;
