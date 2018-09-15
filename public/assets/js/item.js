$(document).foundation();

$(function() {
  $("#addItemForm").submit(function(event) {
    // event.preventDefault()

    var username = $("#usernameInput")
      .val()
      .trim();
    var userId = $("#userIdInput");
    var itemName = $("#itemName");
    var expDate = $("#expDate");

    console.log(itemName, expDate);

    var newItem = {
      itemName: itemName.val().trim(),
      expDate: expDate.val().trim(),
      category: "Produce",
      PersonId: parseInt(userId.val().trim())
    };

    $.ajax("/api/items/" + username, {
      type: "POST",
      data: newItem
    }).then(function(res) {
      res.json(newItem);
      location.reload();
    });
  });

  $(".use").on("click", function(event) {
    var id = $(this).data("id");

    var newUseState = {
      used: 1
    };

    $.ajax("/api/items/" + id, {
      type: "PUT",
      data: newUseState
    }).then(function() {
      console.log("Item #" + id + "used.");
      location.reload();
    });
  });
});
