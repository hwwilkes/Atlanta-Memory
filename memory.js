$(document).ready(function() {

	function switchImg() {

		var clickedImg = document.getElementById("1");
		clickedImg.src = "images/chicken.jpg";

	}
	
	document.getElementById("1").addEventListener("click", switchImg);

});
