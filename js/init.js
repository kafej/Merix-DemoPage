$(document).ready(function() {
  // Search form submit - ready to manipulate
  $('#searchForm').submit( function(e) {
    e.preventDefault();
  });

  // Form Value
  $('#searchInput').click(function(event) {
    $(this).val('');
  });
  $('#searchInput').focusout(function(event) {
    $(this).val('SEARCH PHRASE');
  });

  $('#quickStartSelect').on('change', function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 200);
    return false;
  })
})