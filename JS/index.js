function cerrarNavbar() {
  $(".navbar-collapse").collapse("hide");
}



window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.Home', {
    duration:4000,
    origin: 'left',
    distance: '400px'
  });

  sr.reveal('.School', {
    duration:4000,
    origin: 'left',
    distance: '400px'
  });

