$(function() {

  $('.slider__inner, .news__slider-inner')
  .slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', 
  function() {
    $('.menu ul').slideToggle();
  });
});
function formValidation() {
  var uneme = document.registration.userid;
  var uemail = document.registration.email;
  if (allLetter(uname)) {
    if (ValidateEmail(uemail)) {

    }
  }
  return false;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert('Username must have alphabetcharactersonly');
    uname.focus();
    return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}
function out() {
  alert ("You have subscribed to initiAnim!\nEnjoy");
}