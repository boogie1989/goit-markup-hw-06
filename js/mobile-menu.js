(() => {
	const menu = document.querySelector(".menu-container");
	const open = document.querySelector(".menu-button");
	const close = document.querySelector(".menu-toggle");

	const toggleMenu = () => {
		const isMenuOpen = open.getAttribute("aria-expanded") === "true" || false;
		open.setAttribute("aria-expanded", !isMenuOpen);
		menu.classList.toggle("is-open");
	};

	open.addEventListener("click", toggleMenu);
	close.addEventListener("click", toggleMenu);

	window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
		if (!e.matches) return;
		menu.classList.remove("is-open");
		open.setAttribute("aria-expanded", false);
	});
})();
