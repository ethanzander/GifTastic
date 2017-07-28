$(document).ready(function(){
      $('button').on('click', function(){
            var animal =$(this).data('name');
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=d35cc99ccbac4529900a4030670ac59f";
            $.ajax({
                  url: queryURL,
                  method: 'GET'
            })
            .done(function(response){
                  //console.log(response);
                  var results = response.data;
                  for (var i = 0; i<results.length; i++) {
                        var animalDiv = $('<div>');
                        var p = $('<p>');
                        p.text(results[i].rating);
                        var animalImage = $('<img/>');
                        animalImage.addclass('anImg');
                        animalImage.attr('src', results[i].images.fixed_height.url);
                        animalImage.attr('data-still', results[i].images.fixed_height.url);
                        animalImage.attr('data-animate', results[i].images.fixed_height.url);
                        animalImage.attr('data-state', 'still');
                        animalDiv.append(p);
                        animalDiv.append(animalImage);
                        animalDiv.prependTo($('#gifs'));
                  }
                  $('.anImg').on('click', function(){
                        var state = $(this).attr('data-state');
                        //console.log(this);
                        if (state === 'still') {
                              $(this).attr('src', $(this).data('animate'));
                              $(this).attr('data-state', 'animate');
                        } else {
                              $('.anImg').attr('src', $(this).data('still'));
                              $(this).attr('data-state', 'still');
                        }
                  });
            });
      });
      var amimals = [''];
      $('#add-search-button').on('click', function(){
            var animalButton = $('#gif-input').val();
            var newButton = $('<button/>').addclass('btn btn-primary animal').attr('data-name', animalButton).html(animalButton).css({'margin': '5px'});
            $('#buttons').append(newButton);
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=d35cc99ccbac4529900a4030670ac59f";
            //console.log(animalButton);
            $.ajax({
                  url: queryURL,
                  method: 'GET'
            })
            .done(function(response){
                  var results = response.data;
                  for (var i = 0; i<results.length; i++) {
                        var animalDiv = $('<div>');
                        var p = $('<p>');
                        p.text(results[i].rating);
                        var animalImage = $('<img/>');
                        animalImage.addclass('anImg');
                        animalImage.attr('src', results[i].images.fixed_height.url);
                        animalImage.attr('data-still', results[i].images.fixed_height.url);
                        animalImage.attr('data-animate', results[i].images.fixed_height.url);
                        animalImage.attr('data-state', 'still');
                        animalDiv.append(p);
                        animalDiv.append(animalImage);
                        animalDiv.prependTo($('#gifs'));
                  }
                  $('.anImg').on('click', function(){
                        var state = $(this).attr('data-state');
                        //console.log(this);
                        if (state === 'still') {
                              $(this).attr('src', $(this).data('animate'));
                              $(this).attr('data-state', 'animate');
                        } else {
                              $('.anImg').attr('src', $(this).data('still'));
                              $(this).attr('data-state', 'still');
                        }
                  });
            });
            $('#gif-input').val('');
            return false;
      });   
});
