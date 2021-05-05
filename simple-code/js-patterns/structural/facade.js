// ======================== Facade Pattern ======================== //
// Используйте для создания простого интерфейса,
// абстрагирует он некоторых сложных/неряшливых вещей
// (упрощает функциональность, как например jQuery).

const $ = target => new BebeQuery(target);

function BebeQuery(target) {
	this.target = document.querySelector(target);
}

BebeQuery.prototype.html = function (html) {
	this.target.innerHTML = html;
	return this;
};

// теперь, все, что мы будем видеть и использовать это $
$('#myParagraph').html('Beeebee').html('Some JS design patterns');
