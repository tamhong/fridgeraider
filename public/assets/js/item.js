$(document).foundation();

$(function() {

    $(document).ready(function() {

        var username = req.params.username;

        $.ajax("/api/items/" + username, {
            type: "GET"
        }).then(
            function(res) {
                console.log(res);
            }
        );
    });

    $("#addItemForm").submit(function(event) {

        // event.preventDefault()

        var username = $("#usernameInput").val().trim();
        var userId = $("#userIdInput")
        var itemName = $("#itemName");
        var expDate = $("#expDate");

        console.log (itemName, expDate);
        
        var newItem = {
            itemName: itemName.val().trim(),
            expDate: expDate.val().trim(),
            category: "Produce",
            PersonId: parseInt(userId.val().trim())
        }

        $.ajax("/api/items/" + username, {
            type: "POST",
            data: newItem
        }).then(
            function(res) {
                res.json(newItem);
                location.reload();
            }
        );

        // var username = "Tam-Hong";

        // $.ajax("/api/items/" + username, {
        //     type: "GET"
        // }).then(
        //     function(res) {
        //         console.log(res);
        //     }
        // );



    });
});