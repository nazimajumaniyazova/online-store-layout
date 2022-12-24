const sliderPrice = document.querySelector(".range__slider");

noUiSlider.create(sliderPrice, {
	start: [20, 80],
	step: 1,
	connect: true,
	range: {
		min: 0,
		max: 120,
	},
	tooltips: [true, true],
	format: {
		to: function (value) {
			return Math.round(value);
		},
		from: function (value) {
			return Math.round(value);
		},
	},
});

const priceFromPrice = document.querySelector(".range__control-from");
const priceToPrice = document.querySelector(".range__control-to");

sliderPrice.noUiSlider.on("update", function (values, handle) {
	var value = values[handle];

	if (handle) {
		priceToPrice.value = value;
	} else {
		priceFromPrice.value = value;
	}
});

const sliderAmount = document.querySelector(".range__slider--amount");

noUiSlider.create(sliderAmount, {
	start: [3, 9],
	step: 1,
	connect: true,
	range: {
		min: 0,
		max: 17,
	},
	tooltips: [true, true],
	format: {
		to: function (value) {
			return Math.round(value);
		},
		from: function (value) {
			return Math.round(value);
		},
	},
});

const priceFromAmount = document.querySelector(".range__control-from--amount");
const priceToAmount = document.querySelector(".range__control-to--amount");

sliderAmount.noUiSlider.on("update", function (values, handle) {
	var value = values[handle];

	if (handle) {
		priceToAmount.value = value;
	} else {
		priceFromAmount.value = value;
	}
});
