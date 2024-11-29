

var toggler = document.querySelector('.toggler');
var menu = document.querySelector('#myNav');
var remove = document.querySelector('body');
var closer = document.querySelector('.closer');
// toggler icon
var tIcon = document.querySelector('#t-icon');

toggler.addEventListener("click", function () {
	menu.classList.add('show');
	closer.classList.remove('d-none');
	tIcon.classList.add('d-none');
}, true);

menu.addEventListener("click", function () {
	menu.classList.add('show');
	tIcon.classList.add('d-none');
	closer.classList.remove('d-none');



}, true);

closer.addEventListener("click", function () {
	menu.classList.remove('show');
	closer.classList.add('d-none');
	tIcon.classList.remove('d-none');
}, true)
remove.addEventListener("click", function () {
	menu.classList.remove('show');
	tIcon.classList.remove('d-none');
	closer.classList.add('d-none');


}, true);

