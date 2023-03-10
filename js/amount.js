function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
	const [from, to] = getParsed(fromInput, toInput);
	fillSlider(fromInput, toInput, "#e6e6e6", "#25daa5", controlSlider);
	if (from > to) {
		fromSlider.value = to;
		fromInput.value = to;
	} else {
		fromSlider.value = from;
	}
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
	const [from, to] = getParsed(fromInput, toInput);
	fillSlider(fromInput, toInput, "#e6e6e6", "#2dc071", controlSlider);
	setToggleAccessible(toInput);
	if (from <= to) {
		toSlider.value = to;
		toInput.value = to;
	} else {
		toInput.value = from;
	}
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
	const [from, to] = getParsed(fromSlider, toSlider);
	fillSlider(fromSlider, toSlider, "#e6e6e6", "#2dc071", toSlider);
	if (from > to) {
		fromSlider.value = to;
		fromInput.value = to;
	} else {
		fromInput.value = from;
	}
}

function controlToSlider(fromSlider, toSlider, toInput) {
	const [from, to] = getParsed(fromSlider, toSlider);
	fillSlider(fromSlider, toSlider, "#e6e6e6", "#2dc071", toSlider);
	setToggleAccessible(toSlider);
	if (from <= to) {
		toSlider.value = to;
		toInput.value = to;
	} else {
		toInput.value = from;
		toSlider.value = from;
	}
}

function getParsed(currentFrom, currentTo) {
	const from = parseInt(currentFrom.value, 10);
	const to = parseInt(currentTo.value, 10);
	return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
	const rangeDistance = to.max - to.min;
	const fromPosition = from.value - to.min;
	const toPosition = to.value - to.min;
	controlSlider.style.background = `linear-gradient(
to right,
${sliderColor} 0%,
${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
	const toSlider = document.querySelector(".range__to--amount");
	if (Number(currentTarget.value) <= 0) {
		toSlider.style.zIndex = 2;
	} else {
		toSlider.style.zIndex = 0;
	}
}

const fromSliderAmount = document.querySelector(".range__from--amount");
const toSliderAmount = document.querySelector(".range__to--amount");
const fromInputAmount = document.querySelector(".range__control-from--amount");
const toInputAmount = document.querySelector(".range__control-to--amount");
fillSlider(
	fromSliderAmount,
	toSliderAmount,
	"#e6e6e6",
	"#2dc071",
	toSliderAmount
);
setToggleAccessible(toSliderAmount);

fromSliderAmount.oninput = () =>
	controlFromSlider(fromSliderAmount, toSliderAmount, fromInputAmount);
toSliderAmount.oninput = () =>
	controlToSlider(fromSliderAmount, toSliderAmount, toInputAmount);
fromInputAmount.oninput = () =>
	controlFromInput(fromSliderAmount, fromInput, toInputAmount, toSliderAmount);
toInputAmount.oninput = () =>
	controlToInput(
		toSliderAmount,
		fromInputAmount,
		toInputAmount,
		toSliderAmount
	);
