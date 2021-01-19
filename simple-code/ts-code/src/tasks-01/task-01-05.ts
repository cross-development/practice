enum deliveryCountries {
	China = 'Китай',
	Chile = 'Чили',
	Australia = 'Австралия',
	India = 'Индия',
	Jamaica = 'Ямайка',
}

enum deliveryPrice {
	China = 100,
	Chile = 250,
	Australia = 170,
	India = 80,
	Jamaica = 120,
}

let userCountry: string | null = prompt('Укажите страну доставки!');

if (userCountry === null) {
	alert('Ничего не указано!');
} else {
	userCountry =
		userCountry.charAt(0).toUpperCase() + userCountry.substr(1).toLowerCase();

	switch (userCountry) {
		case deliveryCountries.China:
			alert(
				`Доставка в ${userCountry} будет стоить ${deliveryPrice.China} кредитов`,
			);
			break;
		case deliveryCountries.Chile:
			alert(
				`Доставка в ${userCountry} будет стоить ${deliveryPrice.Chile} кредитов`,
			);
			break;
		case deliveryCountries.Australia:
			alert(
				`Доставка в ${userCountry} будет стоить ${deliveryPrice.Australia} кредитов`,
			);
			break;
		case deliveryCountries.India:
			alert(
				`Доставка в ${userCountry} будет стоить ${deliveryPrice.India} кредитов`,
			);
			break;
		case deliveryCountries.Jamaica:
			alert(
				`Доставка в ${userCountry} будет стоить ${deliveryPrice.Jamaica} кредитов`,
			);
			break;
		default:
			alert('В вашей стране доставка не доступна');
	}
}
