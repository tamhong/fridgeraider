$(function() {
    $("#signupForm").submit(function() {

        event.preventDefault()

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
        }).then(
            function() {
                console.log("created new person");
                window.location.href = "/fridge/" + newPerson.username;
            }
        );
    });
});


//         insertPersons({
//             username: nameInput
//                 .val()
//                 .trim(),
//             email: email
//                 .val()
//                 .trim(),
//             phoneNumber: phoneNumber
//                 .val()
//                 .trim(),
//             fridgeName: fridgeInput
//                 .val()
//                 .trim()




// $(document).ready(function() {
//     var usernameInput = $("#usernameSu");
//     var fridgeInput = $("#fridgenameSu");
//     var phoneNumber = $("#phone");
//     var email = $("#email");

//     $(document).on("submit", "#signupForm", handleSignupFormSubmit);
    
//     function handleSignupFormSubmit(event) {
//         event.preventDefault();

//         console.log ("this is firing");

//         if(!usernameInput.val().trim().trim()) {
//             return;
//         }

//         insertPersons({
//             username: nameInput
//                 .val()
//                 .trim(),
//             email: email
//                 .val()
//                 .trim(),
//             phoneNumber: phoneNumber
//                 .val()
//                 .trim(),
//             fridgeName: fridgeInput
//                 .val()
//                 .trim()
//         });
//     }

//     function insertPersons(userData) {
//         $.post("/api/persons", userData)
//         .then(
//             console.log(userData.name + "created.")
//         );
//     }

// });