const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav .nav-links');
const links = document.querySelectorAll('nav .nav-links li');

console.log('hello');

hamburger.addEventListener('click', () => {
	console.log('helloman');
	navLinks.classList.toggle('open');

	links.forEach((link) => {
		link.classList.toggle('fade');
	});
});
