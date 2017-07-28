$( document ).ready(function() {
	// Variables
	var searchArry = ["new search", "old search"];

	// Set All Functions
	function addSearchButton () {
		// var newButon = $('#new-search-data').val()
		alert("You clicked the new search button!");
	};

	//Logic
	


      // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
      // =================================================================================

      // // 1. Create a for-loop to iterate through the letters array.
      // for(i = 0; i < searchArry.length; i++){
      // // Inside the loop...

      // // 2. Create a variable named "letterBtn" equal to $("<button>");
      // var newBtn = $("<button>");
      // // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      // newBtn.addClass("btn btn-success");
      // // 4. Then give each "letterBtn" a data-attribute called "data-letter", with a value eqaual to "letters[i]"
      // newBtn.attr("data-search", searchArry[i]);
      // // 5. Then give each "letterBtn" a text equal to "letters[i]".
      // newBtn.text(searchArry[i]);
      // // letterBtn.attr("onclick", onClick());
      // // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      // $('#buttons').append(newBtn);
      // }

      // Be sure to test that your code works for this major task, before proceeding to the next one!

      // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
      // =================================================================================

      // 7. Create an "on-click" event attached to the ".letter-button" class.
      $('#add-search-button').on("click", function(){
      // Inside the on-click event...

      // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
      var newBtn = $("<button>");
      // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
      newBtn.addClass("btn btn-success");
      // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
      newBtn.text($(this).attr("data-search", searchArry[i]));
      // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
      $('#buttons').append(newBtn);
      // Be sure to test that your code works for this major task, before proceeding to the next one!
      });
      // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
      // =================================================================================

      // 12. Create an "on-click" event attached to the "#clear" button id.
      $('#clear').on("click", function(){
        $('#display').empty();
      });
      // Inside the on-click event...

      // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

    });


//End document.ready
});

