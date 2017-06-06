$(document).ready(function() {
  //
  // $('.star').on('click', function() {
  //   $(this).toggleClass('star-checked');
  // });
  //
  // $('.ckbox label').on('click', function() {
  //   $(this).parents('tr').toggleClass('selected');
  // });

  $('.btn-filter').on('click', function() {
    var target = $(this).data('target');
    var uri = window.location.search;
    window.location.search = updateQueryStringParameter(uri, 'order', target);
  });

  $('.btn-paging').on('click', function() {
    //alert('def');
    var pageNum = $(this).text();
    var uri = window.location.search;
    window.location.search = updateQueryStringParameter(uri, 'pageNum', pageNum);
  });

});

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}
