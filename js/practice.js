$(document).ready(function () {
  let check = true; // checking and tracking that we are subscribed or not

  $("#youtube").click(function () {
    $(this).toggleClass("subscribed");
    if (check) {
      $(this).text("SUBSCRIBE");
      check = false;
    } else {
      $(this).text("SUBSCRIBED");
      check = true;
    }
  });
});



