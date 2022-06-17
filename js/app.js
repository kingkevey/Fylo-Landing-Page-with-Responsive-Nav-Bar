const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navitems');
    const navLinks = document.querySelectorAll('.navitem');
    
    burger.addEventListener('click', ()=>{
        //Toggle
        nav.classList.toggle('burger-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease-in-out forwards ${index / 5 + .5}s`;
            }
        })

        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();

// const app = ()=> {
//     navSlide();
// }