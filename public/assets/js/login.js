$(function() {
  $("#loginButton").on("click", function(event) {
    event.preventDefault();

    $(".error").empty();

    var username = $("#usernameLi")
      .val()
      .trim();
    var fridgename = $("#fridgenameLi")
      .val()
      .trim();

    $.ajax("/fridge/" + username, {
      type: "GET",
      success: function(data, text) {
        window.location.href = "/fridge/" + username;
      },
      error: function(request, status, error) {
        var error = $("<p>");
        error.attr("class", "error");
        error.attr("style", "color: red");
        error.append("Username does not exist.");
        $("#loginForm").append(error);
      }
    });
  });
});
