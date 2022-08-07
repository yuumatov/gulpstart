// Документация https://github.com/Choices-js/Choices

$('.select').each(function () {
    new Choices($(this)[0], {
        allowHTML: true
    });
});