// Находим все нужные элементы
const widget = document.getElementById('scrollTopWidget');
const handle = document.getElementById('scrollTopHandle');
const arrow = document.getElementById('scrollTopArrow');

// 1. По клику на ручку - открываем/закрываем виджет
handle.onclick = function() {
  widget.classList.toggle('open');
};

// 2. По клику на стрелку - плавно скроллим наверх
arrow.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};