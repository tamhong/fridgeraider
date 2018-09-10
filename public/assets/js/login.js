$(function() {
    $("#loginForm").submit(function(event) {

        event.preventDefault()

        var username = $("#usernameLi").val().trim();
        var fridgename = $("#fridgenameLi").val().trim();

        $("#loginButton").attr("href", "/fridge/" + username);


    });
});