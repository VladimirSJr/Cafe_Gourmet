$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");   
        }
    })
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })
});

const btnMobile = document.getElementById('menu-btn');
function toggleMenu(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menu = document.getElementById('menu');
function toggleLink(event){
    if(event.type === 'touchstart'){event.Default()};
    const link = document.getElementById('link');
    link.classList.toggle('close');
    if(link.classList.contains('close')){nav.classList.remove('active')};
}
menu.addEventListener('click', toggleMenu);
menu.addEventListener('touchstart', toggleMenu);

const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    }
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function (element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass)
        }
    })
};

animeScroll();

if (target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 200));
};