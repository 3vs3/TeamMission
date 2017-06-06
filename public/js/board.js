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
  } else {
    return uri + separator + key + "=" + value;
  }
}

function validateForm() {
  var user_name = document.forms["add-comment"]["user_name"].value;
  if (user_name === "") {
    alert("이름을 입력해 주세요.");
    return false;
  }

  var comment = document.forms["add-comment"]["comment"].value;
  if (comment === "") {
    alert("내용을 입력해 주세요.");
    return false;
  }

  return true;
}
