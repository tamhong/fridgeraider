$(function() {
    $("#loginButton").on("click", function(event) {

        event.preventDefault();

        var username = $("#usernameLi").val().trim();
        var fridgename = $("#fridgenameLi").val().trim();

        // $("#loginButton").attr("href", "/fridge/" + username);
        // $("#loginButton").trigger("click");

        $.get("/fridge/" + username, function (data) {
            console.log (data);
        });


    });
});