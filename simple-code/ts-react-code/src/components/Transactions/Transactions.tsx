//Components
import TransactionItem from './TransactionItem';
//Styles
import styles from './TransactionHistory.module.css';

type TItem = {
	id: string;
	type: string;
	amount: string;
	currency: string;
};

interface IProps {
	items: TItem[];
}

const Transactions = ({ items }: IProps) => (
	<table className={styles.transactionHistory}>
		<thead className={styles.transactionTableHead}>
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</thead>

		<tbody>
			{items.map(({ type, amount, currency, id }) => (
				<TransactionItem
					key={id}
					type={type}
					amount={amount}
					currency={currency}
				/>
			))}
		</tbody>
	</table>
);

export default Transactions;
