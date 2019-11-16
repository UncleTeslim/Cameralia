var buyCamera = document.querySelector("h1");
var camera = document.getElementById('heading');

camera.onmouseover = function() {
  document.getElementById('intro').style.display = 'block';
}
camera.onmouseout = function() {
  document.getElementById('intro').style.display = 'none';
}

//$("body").css("background", "steelblue");

//$(".jumbotron").css("background", "$.cloudinary.image("william-bayreuther-hfk6xOjQlFk-unsplash_muryh3.jpg);

//The following code is used to make a dropdown hover effect
$('ul.nav li.dropdown').hover(function() {

  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);

}, function() {

  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);

});


$(document).ready(function(){
  $('.Quotes').slick({
  	   // Enables tabbing and arrow key navigation
  	  accessibility: true,
  	   // Enable Next/Prev arrows
 	  arrows: true,
  	  infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 5000,

 	 });
});



$(document).ready(function(){
  $('.images').slick({
  	   // Enables tabbing and arrow key navigation
  	  accessibility: true,
  	   // Enable Next/Prev arrows
 	  arrows: true,
  	  infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 10000,
      // Adapts slider height to the current slide
  	  adaptiveHeight: false,
 	 });
});
