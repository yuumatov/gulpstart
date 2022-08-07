// Документация https://swiperjs.com/swiper-api

const slider = new Swiper('.swiper', {
    // Основные настройки
    slidesPerView: 1,

    // Пагинация
    pagination: {
        el: '.swiper-pagination',
    },

    // Кнопки навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Скролбар
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});