$(document).ready(function () {
    $('img').on('click', function () {
        let altSrc = $(this).data('alt-src');
        let currentSrc = $(this).attr('src');
        $(this).attr('src', altSrc);
        $(this).data('alt-src', currentSrc);
    });
})
