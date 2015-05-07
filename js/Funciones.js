// JavaScript Document
$(document).on("pagecreate","#Historia", function(){
	$("p").on("swipe",function(){
		$("span").text("swipe activado!");
	});
});