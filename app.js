var swiper = new Swiper(".ltab ", {

    spaceBetween: 0,
    slidesPerView: 5,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-pre',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        764: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

    },


});

var swiper = new Swiper(".ttab ", {

    spaceBetween: 0,
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-pre',
    },
    breakpoints: {
        640: {
            slidePreview: 1,
            spaceBetween: 20,
        },
        764: {
            slidePreview: 1,
            spaceBetween: 40,
        },
        1024: {
            slidePreview: 1,
            spaceBetween: 50,
        },
        360: {
            slidePreview: 1,
            spaceBetween: 50,
        },

    },


});




const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav=document.querySelector('.h-menu');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');

    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');

    })
}