///////////////////////////////////////////////
let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+359 (99) 99 999 99');

im.mask(selector);