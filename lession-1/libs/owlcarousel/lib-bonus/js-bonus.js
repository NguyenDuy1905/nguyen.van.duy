

// Start & Option OwlCarousel

$('.owl-customer').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    responsive:{
        320:{
            items:3
        },
        600:{
            items:4
        },
        991:{
            items:5
        }
    },
    items: 6
})

$('.owl-hot').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay: true,
    responsive:{
        320:{
            items:2
        },
        600:{
            items:3
        },
        991:{
            items:4
        }
    },
    items: 4
})
    
    // Change icon control
$(".owl-next").html('<span><img src="img/right-arrow.svg" alt="" /></span>');
$(".owl-prev").html('<span><img src="img/left-arrow.svg" alt="" /></span>');