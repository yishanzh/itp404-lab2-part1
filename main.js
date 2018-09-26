let displayTemplateString = document.querySelector("#display").innerHTML;


let renderResults =  Handlebars.compile(displayTemplateString);

$('.loader').css('opacity','0');


let url = `https://thejsguy.com/teaching/2018/api/restaurants.json`;

let promise = $.ajax({
  type: 'GET',
  url: url
});

$('.loader').css('opacity','1');

promise.then(function(response){
  console.log(response);
  let ResultsRendered = renderResults({
    searchResults: response.data
  });

  let html = '';
  $('.loader').hide();

  $('#container').append(ResultsRendered);
}, function(error){
  console.log('error', error);
});
