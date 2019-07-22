$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('nav').toggleClass('open');
        $('nav').toggleClass('close');
    });
});