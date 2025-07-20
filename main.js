document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        }
    });   
});

window.addEventListener('scroll', function() {
    this.window.scrollY > 0 ? document.querySelector('header').classList.add('scrolled') : document.querySelector('header').classList.remove('scrolled'); 
})
