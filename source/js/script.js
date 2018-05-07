// script.js
'use strict';

(function () {

  var nav = document.querySelector('.page-nav');
  var navWrapper = nav.querySelector('.page-nav__wrapper');
  var openBtn = nav.querySelector('.page-nav__toggle--open');
  var closeBtn = nav.querySelector('.page-nav__toggle--close');

  nav.classList.remove('page-nav--no-js');
  navWrapper.classList.add('page-nav__wrapper--closed');

  openBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (navWrapper.classList.contains('page-nav__wrapper--opened')) {
      navWrapper.classList.remove('page-nav__wrapper--opened');
      navWrapper.classList.add('page-nav__wrapper--closed');
    } else {
      navWrapper.classList.remove('page-nav__wrapper--closed');
      navWrapper.classList.add('page-nav__wrapper--opened');
    }
  });

  closeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    navWrapper.classList.remove('page-nav__wrapper--opened');
    navWrapper.classList.add('page-nav__wrapper--closed');
  });
})();
