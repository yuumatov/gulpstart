import $ from 'jquery';

$(function() {
    $('#accordion').accordion({
        collapsible: true,
        heightStyle: "content",
        classes: {
            'ui-accordion-header-active': 'accordion__header_active',
            'ui-accordion-header-icon': 'accordion__indicator',
            'ui-accordion-content-active': 'accordion__content_active'
        }
    });
});