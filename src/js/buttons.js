document.addEventListener('click', function (event) {
  let target = event.target
  let showMoreButton = target.closest('#show-more')
  if (showMoreButton) {
    let spoiler = showMoreButton.previousElementSibling
    spoiler.classList.toggle('content-block__spoiler')
    showMoreButton.innerHTML =
      showMoreButton.innerHTML ===
        `<div class="show-more_ic">
    <img src="./img/arrow_open.svg" alt="arrows">
    </div>
    <div class="show-more__text">Скрыть</div>`
        ? `<div class="show-more_ic">
    <img src="./img/arrow_close.svg" alt="arrows">
    </div>
    <div class="show-more__text">Показать все</div>`
        : `<div class="show-more_ic">
    <img src="./img/arrow_open.svg" alt="arrows">
    </div>
    <div class="show-more__text">Скрыть</div>`
  }
  let readMoreButton = target.closest('#read_more')
  if (readMoreButton) {
    console.log(1)
    let spoiler = readMoreButton.previousElementSibling
    spoiler.classList.toggle('content-description__spoiler')
    readMoreButton.innerHTML =
      readMoreButton.innerHTML ===
        `<div class="show-more_ic">
    <img src="./img/arrow_open.svg" alt="arrows">
    </div>
    <div class="show-more__text">Скрыть</div>`
        ? `<div class="show-more_ic">
    <img src="./img/arrow_close.svg" alt="arrows">
    </div>
    <div class="show-more__text">Читать далее</div>`
        : `<div class="show-more_ic">
    <img src="./img/arrow_open.svg" alt="arrows">
    </div>
    <div class="show-more__text">Скрыть</div>`
  }
})

const burgerButton = document.querySelectorAll('.burger__button');
burgerButton.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.side-navigation__wrapper').classList.toggle('side-navigation__wrapper--active');
}));

const feedbackButton = document.querySelectorAll('.feedback__btn');
feedbackButton.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.feedback').classList.toggle('feedback--active');
  document.querySelector('.page-wrapper').classList.toggle('blur');
}));

const callbackButton = document.querySelectorAll('.call__btn');
callbackButton.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.call').classList.toggle('call--active');
  document.querySelector('.page-wrapper').classList.toggle('blur');
}));

