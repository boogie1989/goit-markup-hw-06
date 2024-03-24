const toggle = () => document.querySelector("[data-modal]").classList.toggle("is-hidden");
for (const atr of ["[data-modal-open]", "[data-modal-close]"]) {
	document.querySelector(atr).addEventListener("click", toggle);
}