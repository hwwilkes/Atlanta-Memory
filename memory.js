$(document).ready(function() {

	var images = ["chicken.jpg", "batonbob.jpg", "clermont.jpg", "falcons.jpg", 
	  "I85.jpg", "kroger.png",  "peach.jpg", "traffic.jpg", "varsity.jpg", "wind.jpg"];
	var cards = document.getElementsByClassName("cardImg");
	var allCards = [];

	//object constructor for cards
	function CreateCard (imageName, divID) {

		this.imageName = imageName;
		this.divID = divID;

	}

	for (var i = 0; i < cards.length; i++) {

		var randomNum = Math.floor(Math.random() * (images.length));
		var randomImg = images[randomNum];
		allCards[i] = new CreateCard (randomImg, i);

    }

	$(".cardImg").click (function () {

		var imgID = parseInt($(this).attr("id"));

		for (var i = 0; i < allCards.length; i++) {

			var allCardsID = allCards[i].divID;

			if (allCardsID === imgID) {

				var imgName = allCards[i].imageName;
				break;
			}
		}

		document.getElementById(imgID).src = "images/" + imgName;

	})

});
