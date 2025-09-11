const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

// Находим все ссылки внутри меню
const navLinks = document.querySelectorAll('#nav a');

// Ваша функция для открытия/закрытия по клику на кнопку
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icon/Close Square.png";
    } else {
        navBtnImg.src = './img/icon/Бургер меню.png';
    }
}

// Новая часть: закрываем меню при клике на любую ссылку в нём
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open'); // Убираем класс 'open'
        navBtnImg.src = './img/icon/Бургер меню.png'; // Возвращаем иконку бургера
    });
});