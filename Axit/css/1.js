const  usl = document.querySelector('.btn-js');
const  we = document.querySelector('.btn-js-we');
const  work = document.querySelector('.btn-js-work');
const  cont = document.querySelector('.btn-js-cont');
const  serv = document.querySelector('.services');
const  about = document.querySelector('.about');
const  works = document.querySelector('.works');
const  contacts = document.querySelector('.contacts');


usl.addEventListener('click', function(e) {
	const pos = serv.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});
we.addEventListener('click', function(e) {
	const pos = about.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});
work.addEventListener('click', function(e) {
	const pos = works.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});
cont.addEventListener('click', function(e) {
	const pos = contacts.getBoundingClientRect().top;
		window.scrollBy({top:pos});
	});

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const close = document.querySelector('.close');

burger.addEventListener('click', function(e) {
		navbar.style.display = "block";
	    close.style.display = "block";
	    burger.style.display = "none";
});
close.addEventListener('click', function(e) {
		navbar.style.display = "none";
		close.style.display = "none";
		burger.style.display = "flex";
});
