import $ from "jquery";

$('.burger').on('click', function() {
    $(this).toggleClass('burger_active');
});