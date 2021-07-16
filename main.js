$(document).ready(function(){

    $(window).on('scroll load' , function(){
        if($(window).scrollTop() > 400){
            $('.header').css({
                'background' : '#000' , 
                'color' : '#fff'
            })
        }else{
            $('.header').css({
                'background' : 'none' , 
                'color' : '#fff'
            })
        }
    })

    $('.slider').owlCarousel({
        nav:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items: 2,
                nav:true
            },
            772:{
                items:3,
                nav:true
            },
            1100:{
                items:4,
                nav:true
            },
            1200:{
                items:5,
                nav:true
            } 
        }
    })


    $('.sliderSectionTwo').owlCarousel({
        dots:true,
        margin: 10,
        responsive:{
            0:{
                items:1,
            },
            443:{
                items:2,
            },
            760:{
                items:3,
            },
            992:{
                items:4,
            }
        }
    })

    $('.gameNewsSliderSection').owlCarousel({
        margin: 10,
        nav:true,
        dots: false,
        mouseDrag:false,

        responsive:{
            0:{
                nav:true,
                items: 1
            },
            772:{
                nav:true,
                items: 2
            },
        }
    })
})