document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNavContent');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            // Toggle the .show class on the collapsible content
            navbarCollapse.classList.toggle('show');

            // Update the aria-expanded attribute for accessibility
            navbarToggler.setAttribute('aria-expanded', navbarCollapse.classList.contains('show'));
        });
    }
});