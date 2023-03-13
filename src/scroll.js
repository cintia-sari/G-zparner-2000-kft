const proba = document.querySelector('.js-menüText');
const banner = document.querySelector('.js-banner');
const button = document.querySelector('.js-button');

const onScroll = (event) =>{
    const scrollPosition = 
        event.target.scrollingElement.scrollTop;

    if(scrollPosition > 170 ){
        banner.style.backgroundSize ="400%";
        proba.style.opacity = 0;
        proba.style.translate = "0 -50px";
        proba.style.scale = "0.9";
        button.style.opacity = 0;
        button.style.translate = "0 -40px";
        button.style.scale = "0.8";
    }else{
        banner.style.backgroundSize ="250%";
        proba.style.opacity = 1;
        proba.style.translate = 0;
        proba.style.scale = 1;
        button.style.opacity = 1;
        button.style.translate = 0;
        button.style.scale = 1;
    }
};

document.addEventListener("scroll", onScroll);

console.log(scrollPosition);