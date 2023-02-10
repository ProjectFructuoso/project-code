
//Index Page

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navigation : true,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});



//consular services & Admin


$('#btn-slider').click(function(){
    if($('#sliders').hasClass('active')){
        $('#sliders').removeClass('active');
        $('#sliders-background').removeClass('active');
    } else {
        $('#sliders').addClass('active');
        $('#sliders-background').addClass('active');
    }
});


$('#sliders-background').click(function(){
    $('#sliders').removeClass('active');
    $('#sliders-background').removeClass('active');
});


//language


if ($(".dropdown").length) {
    $(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            var swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-danger me-3",
                },
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: "Are you sure?",
                    text: "Do you really want to change your current language!",
                    icon: "warning",
                    confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Yes, I am!",
                    cancelButtonText: "<i class='fas fa-times-circle me-1'></i> No, I'm Not",
                    showCancelButton: true,
                    reverseButtons: true,
                    focusConfirm: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        if (!$(this).hasClass("active")) {
                            $(".dropdown-menu .dropdown-item").removeClass("active");
                            $(this).addClass("active");
                            $(this)
                                .parents(".dropdown")
                                .find(".btn")
                                .html("<span class='flag-icon flag-icon-us me-1'></span>" + $(this).text());
                        }
                        Swal.fire({
                            icon: "success",
                            title: "Amazing!",
                            text: "Your current language has been changed successfully.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        }
    });
}