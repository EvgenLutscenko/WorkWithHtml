/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const advert = document.querySelectorAll('.promo__adv img'),
    promo = document.querySelector('.promo__genre'),
    promoInter = document.querySelector('.promo__interactive-list');

advert.forEach(element => {
    element.remove();
});

promo.textContent = "Драма";

document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";

promoInter.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    promoInter.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
})