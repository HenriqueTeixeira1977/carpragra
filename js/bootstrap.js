//Script Navbar da página Bootstrap
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

//  Script para página nova do Bootstrap


function mudarTitulo(titulo) {
    document.getElementById('modalTitulo').textContent = titulo;
  }



const modalElement = document.getElementById('galleryModal');
const closeBtn = modalElement.querySelector('.btn-close');

closeBtn.addEventListener('click', () => {
const modalInstance = bootstrap.Modal.getInstance(modalElement);
modalInstance.hide();
});
