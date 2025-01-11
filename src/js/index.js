import '../scss/style.scss'

const body = document.body
const servicesBtn = body.querySelector('.services__btn')
const descrFurthe = body.querySelector('.services__descr-further')
const descrEnd = body.querySelector('.services__descr-end')
const serviceArrow = body.querySelector('.services__arrow')
const servicesRead = body.querySelector('.services__read')
const modalCall = body.querySelector('.wrapper__modal-call')

const readMore = () => {
  descrFurthe.classList.toggle('services__descr-further--active')
  descrEnd.classList.toggle('services__descr-end--active')
  serviceArrow.classList.toggle('rotate')

  if (servicesRead.textContent === 'Читать далее') {
    servicesRead.textContent = 'Скрыть'
  } else {
    servicesRead.textContent = 'Читать далее'
  }
}

servicesBtn.addEventListener('click', readMore)

let sliders
const breakpointSwiper = window.matchMedia('(max-width: 768px)')
const swiper = body.querySelector('.swiper')
function createSlider() {
  if (breakpointSwiper.matches) {
    sliders = new Swiper('.swiper', {
      direction: 'horizontal',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  } else {
    if (swiper.classList.contains('swiper-initialized')) {
      for (let slider of sliders) {
        slider.destroy()
      }
    }
  }
}
createSlider()

breakpointSwiper.addEventListener('change', createSlider)

const brands = body.querySelector('.brands')
const swipeWrapper = brands.querySelector('.swiper-wrapper')
const brandsBtn = brands.querySelector('.button__show-more')
const brandsSee = brandsBtn.querySelector('.text')
const brandsArrow = brandsBtn.querySelector('.brands__arrow')
const brandsHiddenSlide = 'swiper-slide--hidden'
const brandsSlidesHidden = brands.querySelectorAll('.swiper-slide--hidden')

const technic = body.querySelector('.technic')
const techSwipeWrap = technic.querySelector('.technic__swiper-wrapper')
const technicBtn = technic.querySelector('.button__show-more')
const technicSee = technicBtn.querySelector('.text')
const technicArrow = technicBtn.querySelector('.technic__arrow')
const technicHiddenSlide = 'technic__slide--hidden'
const technicSlidesHidden = technic.querySelectorAll('.technic__slide--hidden')

const showAll = (
  slideHidden,
  slides,
  see,
  arrow,
  swiperIndent,
  brandsIndent
) => {
  slides.forEach((element) => element.classList.toggle(slideHidden))

  if (see.textContent === 'Показать все') {
    see.textContent = 'Скрыть'
    arrow.style.transform = 'rotate(180deg)'
    swiperIndent.classList.add('swiper-indent')
    brandsIndent.classList.add('brands-indent')
  } else {
    see.textContent = 'Показать все'
    arrow.style.transform = 'rotate(360deg)'
    swiperIndent.classList.remove('swiper-indent')
    brandsIndent.classList.remove('brands-indent')
  }
}

brandsBtn.addEventListener('click', () =>
  showAll(
    brandsHiddenSlide,
    brandsSlidesHidden,
    brandsSee,
    brandsArrow,
    swipeWrapper,
    brands
  )
)
technicBtn.addEventListener('click', () =>
  showAll(
    technicHiddenSlide,
    technicSlidesHidden,
    technicSee,
    technicArrow,
    techSwipeWrap,
    technic
  )
)

const headerBurger = body.querySelector('.header__burger')
const burgerOverlay = body.querySelector('.burger-overlay')
const headerMenu = burgerOverlay.querySelector('.header-menu')
const headerMenuBtnClose = headerMenu.querySelector('.header-menu__btn-close')

const headerMenuActiveFn = (e) => {
  if (e.target == burgerOverlay) {
    burgerOverlay.classList.remove('burger-overlay--active')
    headerMenu.classList.remove('header-menu--active')
    body.classList.remove('body-fixed')
  }
}

burgerOverlay.addEventListener('click', headerMenuActiveFn)

const headerMenuBtn = () => {
  burgerOverlay.classList.toggle('burger-overlay--active')
  headerMenu.classList.toggle('header-menu--active')
  body.classList.toggle('body-fixed')
}

headerBurger.addEventListener('click', headerMenuBtn)
headerMenuBtnClose.addEventListener('click', headerMenuBtn)

const buttonTube = body.querySelectorAll('.button-tube')
const wrapperModalCall = body.querySelector('.wrapper__modal-call')
const ClassWrapperModalCallOpen = 'wrapper__modal-call--open'
const buttomClose = wrapperModalCall.querySelector('.modal-call__btn-close')
const buttonMessage = body.querySelectorAll('.button-message')
const wrapperModalFeedback = body.querySelector('.wrapper__modal-feedback')
const ClassWrapperModalFeedbackOpen = 'wrapper__modal-feedback--open'
const feedbackBtnClose = wrapperModalFeedback.querySelector(
  '.modal-feedback__btn-close'
)

const modals = (button, wrapperModal, btnClose, classWrapperOpen) => {
  button.forEach((buttonItem) => {
    buttonItem.addEventListener('click', function () {
      wrapperModal.classList.add(classWrapperOpen)
      body.classList.add('body-fixed')
    })
  })

  btnClose.addEventListener('click', function () {
    wrapperModal.classList.remove(classWrapperOpen)
    if (screen.width < 1440) {
      if (!headerMenu.classList.contains('header-menu--active')) {
        body.classList.remove('body-fixed')
      }
    } else {
      body.classList.remove('body-fixed')
    }
  })

  wrapperModal.addEventListener('click', (e) => {
    if (e.target == wrapperModal) {
      wrapperModal.classList.remove(classWrapperOpen)
      if (screen.width < 1440) {
        if (!headerMenu.classList.contains('header-menu--active')) {
          body.classList.remove('body-fixed')
        }
      } else {
        body.classList.remove('body-fixed')
      }
    }
  })
}

modals(buttonTube, wrapperModalCall, buttomClose, ClassWrapperModalCallOpen)
modals(
  buttonMessage,
  wrapperModalFeedback,
  feedbackBtnClose,
  ClassWrapperModalFeedbackOpen
)

const modalFeedback = wrapperModalFeedback.querySelector('.modal-feedback')
const modalCallInput = body.querySelector('.modal-call__input')
const modalFeedbackInput = body.querySelector('.modal-feedback__input')

const inputFocusFunction = (input) => {
  return function () {
    input.focus()
  }
}

modalCall.addEventListener(
  'transitionstart',
  inputFocusFunction(modalCallInput)
)

modalFeedback.addEventListener(
  'transitionstart',
  inputFocusFunction(modalFeedbackInput)
)
