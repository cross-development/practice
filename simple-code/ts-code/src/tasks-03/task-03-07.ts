// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы
// с балансом и историей транзакций.

const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

const account = {
	balance: 0,

	transactions: [],

	createTransaction(amount, type) {
		const id = this.transactions.length + 1;

		const transaction = {
			id,
			amount,
			type,
		};

		return transaction;
	},

	deposit(amount) {
		const deposit = this.createTransaction(amount, Transaction.DEPOSIT);
		this.transactions.push(deposit);
		this.balance += amount;
	},

	withdraw(amount) {
		if (amount > this.balance) {
			console.log('Снятие такой суммы не возможно, недостаточно средств.');
		} else if (amount === 0) {
			console.log('Сумма снятия должна быть больше 0.');
		} else {
			const withdraw = this.createTransaction(amount, Transaction.WITHDRAW);
			this.transactions.push(withdraw);
			this.balance -= amount;
		}
	},

	getBalance() {
		return this.balance;
	},

	getTransactionDetails(id) {
		for (let i = 0; i < this.transactions.length; i += 1) {
			if (this.transactions[i].id === id) {
				return this.transactions[i];
			}
		}

		return 'Такого id не существует!';
	},

	getTransactionTotal(type) {
		let transactionTypeTotal = 0;

		for (const key of this.transactions) {
			if (type === key.type) {
				transactionTypeTotal += key.amount;
			}
		}

		return transactionTypeTotal;
	},
};

console.log(account.deposit(500));
console.log(`Текущий баланс: ${account.getBalance()} USD`);
console.table(account.transactions);
console.log(account.withdraw(300));
console.log(`Текущий баланс: ${account.getBalance()} USD`);
console.table(account.transactions);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(5));
console.log(
	`Количество средств транзакций DEPOSIT: ${account.getTransactionTotal(
		Transaction.DEPOSIT,
	)} USD`,
);
console.log(
	`Количество средств транзакций WITHDRAW: ${account.getTransactionTotal(
		Transaction.WITHDRAW,
	)} USD`,
);
