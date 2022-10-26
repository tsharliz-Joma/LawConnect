const navBar = document.querySelector('.navbar');
const header = document.querySelector('header');

const changeNavOpacity = () => {
    if(window.scrollY > header.offsetHeight - 50){
        navBar.style.opacity = 0.9;
    }else {
        navBar.style.background = '0E5f35'
        navBar.style.opacity = 1;
        console.log('Your not targetting correctly')
    }
}

window.addEventListener('scroll', changeNavOpacity)

changeNavOpacity();