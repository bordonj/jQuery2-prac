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
});

