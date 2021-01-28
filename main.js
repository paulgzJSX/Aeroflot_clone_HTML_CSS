const servicesLink = document.querySelector('.services-nav-link')
const servicesMenu = document.querySelector('.tickets-submenu')
const overlay2 = document.querySelector('.overlay-2')

servicesLink.addEventListener('mouseover', () => {
    setTimeout(() => {
        servicesMenu.classList.add('show')  
        overlay2.style.display = 'block'
    }, 400);
    
} )

servicesLink.addEventListener('mouseout', () => {
    setTimeout(() => {
        servicesMenu.classList.remove('show')
        overlay2.style.display = 'none'
    }, 400);
     
})