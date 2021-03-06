(() => {
  // Toggle menu
  const nav = document.querySelector('.nav');
  if (nav) {
    const page = document.querySelector('#page');
    const navToggle = nav.querySelector('.nav__toggle');
    const hamburger = nav.querySelector('.hamburger');

    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--active');
      hamburger.classList.toggle('hamburger--active');
      page.classList.toggle('overflow-hidden');
    });
  }

  // Select
  const selects = document.querySelectorAll('.select');
  if (selects) {
    selects.forEach((select) => {
      const selectTitle = select.querySelector('.select__title');
      const selectItems = select.querySelectorAll('.select__item');

      // Toggle active class
      select.addEventListener('click', () => {
        select.classList.toggle('select--active');
      });

      selectItems.forEach((item) => {
        item.addEventListener('click', () => {
          selectItems.forEach((item) => {
            item.classList.remove('select__item--active');
          });

          item.classList.add('select__item--active');
          // Set text title
          selectTitle.textContent = item.textContent;
        });
      });

      // Close when click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.select')) {
          select.classList.remove('select--active');
        }
      });

      // Close when press Esc
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          select.classList.remove('select--active');
        }
      });
    });
  }

  // Counter
  const counters = document.querySelectorAll('.counter');
  if (counters) {
    counters.forEach((counter) => {
      const counterInput = counter.querySelector('.counter__input');
      const counterButton = counter.querySelector('.counter__button');
      const counterItems = counter.querySelectorAll('.counter__item');

      // Open list
      counter.addEventListener('click', (e) => {
        if (e.target === counterButton) {
          counter.classList.toggle('counter--active');
        } else {
          counter.classList.remove('counter--active');
        }
      });

      // Set input value
      counterItems.forEach((item) => {
        item.addEventListener('click', () => {
          counterInput.value = item.textContent;
          counter.classList.remove('counter--active');
        });
      });

      // Close when click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.counter')) {
          counter.classList.remove('counter--active');
        }
      });

      // Close when press Esc
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          counter.classList.remove('counter--active');
        }
      });
    });
  }

  // Counter-buttons
  const counterButtons = document.querySelectorAll('.counter-buttons');
  if (counterButtons) {
    counterButtons.forEach((counter) => {
      const buttonAdd = counter.querySelector('.counter-buttons__button--add');
      const buttonRemove = counter.querySelector('.counter-buttons__button--remove');
      const counterInput = counter.querySelector('.counter-buttons__input');

      // Add item
      buttonAdd.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
        if (parseInt(counterInput.value) > 1) {
          buttonRemove.removeAttribute('disabled');
        }
      });

      // Remove item
      buttonRemove.addEventListener('click', () => {
        if (parseInt(counterInput.value) <= 1) {
          buttonRemove.setAttribute('disabled', 'disabled');
        } else {
          counterInput.value = parseInt(counterInput.value) - 1;
        }
      });
    });
  }

  // Scroll to top
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 900) {
        scrollTop.classList.add('scroll-top--active');
      } else {
        scrollTop.classList.remove('scroll-top--active');
      }
    });

    scrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0
      });
    });
  }

  // Slider intro
  const swiper = new Swiper('.intro__slider', {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    autoHeight: true,
    wrapperClass: 'intro__slider-wrapper',
    slideClass: 'intro__slide',
    slideActiveClass: 'intro__slide--active',

    pagination: {
      el: '.intro__pagination',
      clickable: true,
      bulletClass: 'intro__pagination-bullet',
      bulletActiveClass: 'intro__pagination-bullet--active'
    },
  });

  // Product thumb slider
  const productThumbSwiper = new Swiper('.product__thumb-slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
      768: {
        spaceBetween: 15,
        direction: 'vertical',
      }
    },

    wrapperClass: 'product__thumb-list',
    slideClass: 'product__thumb-item',
  });

  // Product preview slider
  const productPreviewSwiper = new Swiper('.product__preview', {
    slidesPerView: 1,
    spaceBetween: 30,

    wrapperClass: 'product__preview-wrap',
    slideClass: 'product__preview-item',
    slideActiveClass: 'product__preview-item--active',

    thumbs: {
      swiper: productThumbSwiper,
      slideThumbActiveClass: 'product__thumb-item--active',
    },
  });
})();
