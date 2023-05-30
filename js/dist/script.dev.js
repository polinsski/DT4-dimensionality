"use strict";

var zIndex = 1;
$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop();
  var rotationAngle = -(scrollPos / 10); // Multiply by -1 to reverse the direction of rotation

  $('.selected').css({
    transform: 'perspective(3000px) rotateY(' + rotationAngle + 'deg)'
  });

  if (rotationAngle > -189 && rotationAngle < -90) {
    $('#bookTitle').css({
      transform: 'rotateX(180deg) rotate(180deg)'
    });
  } else {
    $('#bookTitle').css({
      transform: ''
    });
  }
});
$('body').on('click', 'div', function () {
  var clickedContainer = $(this); // Add 'selected' class to the clicked container and remove 'selected' class from other containers

  $('div').removeClass('selected');
  clickedContainer.addClass('selected'); // Increment z-index of the clicked container

  clickedContainer.css('z-index', zIndex);
  zIndex++; // Reset scrollTop to 0

  $(window).scrollTop(0);
});