//business logic

//UI or front-end logic
$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#animal").prepend("<li>woof!</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#cat").click(function() {
    $("ul#animal").prepend("<li>Nya!</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#bunny").click(function() {
    $("ul#animal").prepend("<li>Squeak!</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#green").click(function() {
    $('body').removeClass();
    $('body').addClass('green-bg');
  });

  // <img id='show-animal' src='img/bunny.jpeg'></img>

  let imgElement = document.createElement('img');
  imgElement.src = 'img/bunny.jpeg';
  imgElement.id = 'show-animal';

  $("button#img").click(function() {
    $('ul#animal').before(imgElement);
    $(imgElement).click(function() {
      $(this).remove();
    })
    // $('#show-animal').show();
  });
});