
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');
const burgerClose = document.getElementById('burgerClose');

// clone menu
const menuClone = document.querySelector('.menu').cloneNode(true);
document.querySelector('.burger-nav').appendChild(menuClone);

// open / close
burgerBtn.onclick = () => {
  burgerMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
};

burgerClose.onclick = () => {
  burgerMenu.classList.remove('active');
  document.body.style.overflow = '';
};

// dropdown toggle
document.querySelectorAll('.burger-nav .dropdown > a').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    const submenu = link.nextElementSibling;
    const isOpen = submenu.style.display === 'block';

    document.querySelectorAll('.burger-nav .submenu')
      .forEach(s => s.style.display = 'none');

    submenu.style.display = isOpen ? 'none' : 'block';
  };
});

