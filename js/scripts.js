$(document).ready(function() {
  $("form#word-submit").submit(function(event) {
    event.preventDefault();
    var input = $("#word").val();
    $("#input-word").text(input);
    if (!isPalindrome(input)) {
      $("#not").show();
    }
    $(".output").show();
  })
})
