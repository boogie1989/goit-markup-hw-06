(() => {
	const toggle = () => document.querySelector("[data-modal]").classList.toggle("is-hidden");
	for (const el of [document.querySelector("[data-modal-open]"), document.querySelector("[data-modal-close]")]) {
		el.addEventListener("click", toggle);
	}

	document.querySelector(".backdrop").addEventListener("click", (event) => {
		if (event.target != document.querySelector(".modal")) {
			toggle();
		}
	});
})();
