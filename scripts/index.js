const navbar = document.querySelector('.navbar')
const mobileNavbar = document.querySelector('.navbar__mobile')
const button = document.querySelector('.burguer')

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

// adicionar box-shadow quando página estiver na posição maior que 0
window.addEventListener('scroll',function() {
    if(this.window.pageYOffset > 0) return navbar.classList.add('active');
    else return navbar.classList.remove('active');
});