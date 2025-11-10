document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
event.stopPropagation();
document.querySelector('.dropdown-nav').classList.toggle('open');
});
  
document.addEventListener('click', function(event) {
const nav = document.querySelector('.dropdown-nav');
if (!nav.contains(event.target)) {
  nav.classList.remove('open');
}
});

document.querySelectorAll('.dropdown-menu a').forEach(link => {
link.addEventListener('click', function() {
  document.querySelector('.dropdown-nav').classList.remove('open');
});
}); 

document.querySelectorAll('.image-container').forEach(container => {
  const carousel = container.querySelector('ul');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  const scrollAmount = 310; 

  if (!carousel || !prevBtn || !nextBtn) return; 

  prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

   
setInterval(() => {
if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
  carousel.scrollTo({ left: 0, behavior: 'smooth' });
} else {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
}, 10000);
});


