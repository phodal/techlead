$(document).ready(function() {
  $('a[rel=popover]').click(function() {
    $(this).popover('toggle');
  });
  $('a[rel=popover]').hover(function() {
    $(this).popover('show');
  }, function() {
    $(this).popover('hide');
  });
});

