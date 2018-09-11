$(function() {
    $("#loginButton").on("click", function(event) {

        event.preventDefault();

        var username = $("#usernameLi").val().trim();
        var fridgename = $("#fridgenameLi").val().trim();

        // $("#loginButton").attr("href", "/fridge/" + username);
        // $("#loginButton").trigger("click");
        window.location.href="/fridge/"+username
        


    });
});