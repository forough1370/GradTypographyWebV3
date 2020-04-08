/*$(document).ready(function(){
  $("#textToggler").click(function(){
    $(".toggleText").toggle();
  });
});*/
// function toggleImage() {
//   $(".hiddenclickimg").toggle();
// };

function mouseIn() {
  $('.img').addClass('show');
}

function mouseOut() {
  $('.img').removeClass('show');
}

$('.hover-me').hover(mouseIn, mouseOut);

$(document).ready(function() {
  var bodyWidth = document.body.clientWidth
  var bodyHeight = document.body.clientHeight;

$('.img').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('top', randPosY);

  });
});

$('.next-one').click(function(){
    $('.box-two').show();
    $('.box-two').hide();
 });