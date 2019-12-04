// Make sure we wait to attach our handlers until the DOM is fully loaded.
window.onload = function() {
$(".burgerList").on("click", ".change-devoured", function(event) {
    var id = $(this).data("id");
    var updatedState = $(this).data("newdevoured");
    console.log("CLICKING...")

    var newDevouredState = {
      devoured: updatedState
    };

    console.log("running");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured state to", updatedState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Cooked a new burger" + newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
}