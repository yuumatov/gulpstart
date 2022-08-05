import $ from "jquery";
import Choices from "choices.js";

$('.select').each(function() {
    new Choices($(this)[0]);
});