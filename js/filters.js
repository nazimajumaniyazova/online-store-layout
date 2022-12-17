const filters = document.querySelector(".filters");
const selectMobile = document.querySelector(".shop__select-mobile");

selectMobile.addEventListener("click", () => {
	filters.classList.toggle("active");
});
