$(function() {

    $(document).ready(function() {
        var username = "Tam-Hong";

        $.ajax("/api/items/" + username, {
            type: "GET"
        }).then(
            function(res) {
                console.log(res);
            }
        );
    });

    $("#addItemForm").submit(function(event) {

        event.preventDefault()

        var username = "Tam-Hong";

        var itemName = $("#itemName");
        var expDate = $("#expDate");

        console.log (itemName, expDate);
        
        var newItem = {
            itemName: itemName.val().trim(),
            expDate: expDate.val().trim(),
            category: "Produce",
            PersonId: 1,
        }

        $.ajax("/api/items/" + username, {
            type: "POST",
            data: newItem
        }).then(
            function(res) {
                res.json(newItem);
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