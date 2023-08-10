import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])

let slider = null

function sliderInit() {
  if (!slider) {
    slider = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    sliderInit()
  }
}

window.addEventListener('resize', function (event) {
  if (window.innerWidth < 767) {
    sliderInit()
  } else {
    if (slider) {
      for (let obj in slider) {
        slider[obj].destroy()
      }
      slider = null
    }
  }
})
