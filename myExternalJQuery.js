$(document).ready(function() {
  $('.col-1').on('click', 'img', function() {
    $(this).closest('.col-1').find('.caption').slideToggle();
  });

  $('.col-2').on('click', 'img', function() {
    $(this).closest('.col-2').find('.caption').slideToggle();
  });

  $('.col-3').on('click', 'img', function() {
    $(this).closest('.col-3').find('.caption').slideToggle();
  });
});
