let btn = document.querySelector('.menu__btn');
let ul = document.querySelector('.menu__list')


btn.addEventListener('click', ()=>{
  btn.classList.toggle('active');
  ul.classList.toggle('active');
})

ul.addEventListener('click', ()=> {
  btn.classList.remove('active');
  ul.classList.remove('active');
})

console.log("1.Вёрстка валидная: +10");
console.log("2.вёрстка семантическая: +20");
console.log("3.для оформления СV используются css-стили: +30");
console.log("4.контент размещается в блоке, который горизонтально центрируется на странице: +10");
console.log("5.Вёрстка адаптивная: +10");
console.log("6.есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным: +10");
console.log("7.на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым): +10");
console.log("8.контакты для связи и перечень навыков оформлены в виде списка ul > li: +10");
console.log("9.CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского : +10");
console.log("10.CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода: +10");
console.log("11.CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий: +10");
console.log("12.CV выполнено на английском языке: +10");
console.log("13.выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт): +10");
console.log("14.есть видеорезюме автора CV на английском языке: +0");
console.log("15.дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать): +10");
console.log("Итого: 150");


