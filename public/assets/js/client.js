$(function() {
  $("#signupForm").submit(function() {
    event.preventDefault();

    $(".error").empty();

    var usernameInput = $("#usernameSu");
    var fridgeInput = $("#fridgenameSu");
    var phoneNumber = $("#phone");
    var email = $("#email");

    var newPerson = {
      username: usernameInput.val().trim(),
      email: email.val().trim(),
      phoneNumber: phoneNumber.val().trim(),
      fridgeName: fridgeInput.val().trim()
    };

    $.ajax("/api/persons", {
      type: "POST",
      data: newPerson,
      success: function(data, text) {
        console.log("created new person");
        window.location.href = "/fridge/" + newPerson.username;
      },
      error: function(request, status, error) {
        var error = $("<p>");
        error.attr("class", "error");
        error.attr("style", "color: red");
        error.append("Please select a different username.");
        $("#signupForm").append(error);
      }
    });
  });
});
