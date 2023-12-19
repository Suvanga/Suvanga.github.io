const menu =document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

});


  // Function to load project section from index.html
  function loadProjectSection() {
    window.location.href = 'index.html#projects-section';
  }

