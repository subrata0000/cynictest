// owl_carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});


// owl carousel 2

$(".owl_carousel_2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});


// sticky nav bar


$(window).scroll(function () {
  if ($(window).scrollTop()){
    $ ("nav").addClass("sticky");
  }
  else {
    $("nav").removeClass("sticky");
  }
});