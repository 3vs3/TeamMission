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
    var $target = $(this).data('target');
    $(location).attr('href', '?order=' + $target);

    //$temp = $.url().param('order');
    //$(location).attr('href', qs);
  });

  $('.btn-paging').on('click', function() {
    //alert('def');
    var $pageNum = $(this).text();

    $(location).attr('href', '?pageNum=' + $pageNum);
  });

});

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
