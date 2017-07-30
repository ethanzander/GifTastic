// Set all GLOBALVariables
var inputArray = [];
newBtn(inputArray);
//Set all Functions
function makeBtn(){
      queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).text() + "&api_key=d35cc99ccbac4529900a4030670ac59f" + "&limit=10&rating=g&rating=pg";
      $.ajax({
            url: queryURL,
            method: "GET"
      }).done(function(response){
            //console.log(response);
            addGifs(response);
      });
}
function newBtn(array){
      $("#new-btns").empty();
      for (var i = 0; i < array.length; i++) {
            $("#new-btns").append('<button class="search-btn btn btn-primary">' + array[i] + '</button>');
      }
}
function addGifs(obj){
      var addDiv;
      $("#gifDiv").empty();
      for (var i = 0; i < obj.data.length; i++) {
            addDiv = $('<div class="gif"></div>');
            $("#gifDiv").append(addDiv);
            console.log(addDiv);
            stillGif = $('<img src="' + obj.data[i].images.fixed_height_still.url + '">');
            addDiv.append(stillGif);
            addDiv.append('<p class="rating">Rating: '+ obj.data[i].rating +"</p>");
            stillGif.attr("data-state","still");
            stillGif.attr("data-animateURL", obj.data[i].images.fixed_height.url);
            stillGif.attr("data-stillURL", obj.data[i].images.fixed_height_still.url);
      }
}
function pausePlay(){
      if($(this).attr("data-state")==="still"){
            $(this).attr("src", $(this).attr("data-animateURL"));
            $(this).attr("data-state","animated");
      }
      else{
            $(this).attr("src", $(this).attr("data-stillURL"));
            $(this).attr("data-state","still");
      }
}
//Page Logic
$(document).on("click",".search-btn", makeBtn);
$(document).on("click","img", pausePlay);
$("#new-search-topic").submit(function(event){
      inputArray.push($(this).children().eq(2).val());
      newBtn(inputArray);
      $(this).children().eq(2).val("");
      event.preventDefault();
});