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
            slidePreview: 2,
            spaceBetween: 20,
        },
        764: {
            slidePreview: 4,
            spaceBetween: 40,
        },
        1024: {
            slidePreview: 5,
            spaceBetween: 50,
        },

    },


});

let hmenu=document.querySelector(".h-menu")


function toggleMenu(){
    if(hmenu.style.display=="flex")
    {
       hmenu.style.display="none"
    }
    else{
        hmenu.style.display="flex"
    }
}

