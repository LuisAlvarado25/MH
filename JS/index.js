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

  sr.reveal('.title', {
    duration:4000,
    origin: 'left',
    distance: '400px'
  });

  // Social Media
  function toggleBtn() {
    const Btns = document.querySelector(".btns");
    const add = document.getElementById("add");
    const remove = document.getElementById("remove");
    const btn = document.querySelector(".btns").querySelectorAll("a");
    Btns.classList.toggle("open");
    if (Btns.classList.contains("open")) {
      remove.style.display = "block";
      add.style.display = "none";
      btn.forEach((e, i) => {
        setTimeout(() => {
          bottom = 40 * i;
          e.style.bottom = bottom + "px";
          console.log(e);
        }, 100 * i);
      });
    } else {
      add.style.display = "block";
      remove.style.display = "none";
      btn.forEach((e, i) => {
        e.style.bottom = "0px";
      });
    }
  }