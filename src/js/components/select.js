$('.select').each(function() {
    new Choices($(this)[0], {
        allowHTML: true
    });
});