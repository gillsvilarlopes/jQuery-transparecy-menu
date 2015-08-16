// JavaScript by Gills Vilar Lopes

var $jq = jQuery.noConflict();


// Functions AFTER loading…

$jq('document').ready(function(){  
  
  // Transparency menu
  $jq('a img, input[type="submit"]').mouseover(function() {
	$jq(this).css('opacity', .6);
	}).mouseout(function() {
	$jq(this).css('opacity', 1);
  });
  
});