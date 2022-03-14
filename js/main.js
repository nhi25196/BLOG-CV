new WOW().init();

//  ------------------------------------------------------------------------------ 
$('#toggle').click(function() {
    $('.navbar-toggler').toggleClass('change')
})

//  ---------------------------------------------------------------------------
$(".tab-menu li a").click(function() {
    $(".tab-content .active").addClass("animated fadeIn");

});
//  ------------------------------------------------------------------------------ 
// $(".tab-menu li .skill").click(function() {
//     $(".progress-bar").animate({
//         width: "70%",
//     }, 2000);
//   });
//  ------------------------------------------------------------------------------ 
// ---- Skill bar
// jQuery('.skillbar').each(function() {
//     jQuery(this).appear(function() {
//         jQuery(this).find('.count-bar').animate({
//             width:jQuery(this).attr('data-percent')
//         },3000);
//         var percent = jQuery(this).attr('data-percent');
//         jQuery(this).find('.count').html('<span>' + percent + '</span>');
//     });
// });	

//  ------------------------------------------------------------------------------

$(".navbar_menu ul a").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 1100);
});

/* ------------------------------------------------------------------------ */

/***
  Preloader
***/

$('body').addClass('preloader-active');
$(window).on('load', function() {

    setTimeout(() => {
        $('.preloader').fadeOut();
        $('.loader').delay().fadeOut();
        $('body').removeClass('preloader-active');
    }, 300);

});


// scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#top').fadeIn(1000);
    } else {
        $('#top').fadeOut(1000);
    }
})
$('#top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
})