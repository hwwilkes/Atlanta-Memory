$(document).ready(function() {

	var images = ["chicken.jpg", "chicken.jpg", "batonbob.jpg", "batonbob.jpg", "clermont.jpg", "clermont.jpg", 
					"falcons.jpg", "falcons.jpg", "I85.jpg", "I85.jpg", "kroger.png", "kroger.png",  "peach.jpg", 
					"peach.jpg", "traffic.jpg", "traffic.jpg", "varsity.jpg", "varsity.jpg", "wind.jpg", "wind.jpg"];
	var cards = document.getElementsByClassName("cardImg");
	var allCards = [];
	var dealtCards = [];

	//object constructor for cards
	function CreateCard (imageName) {

		this.imageName = imageName;
		this.divID = '';

	}

	for (var i = 0; i < cards.length; i++) {

		allCards[i] = new CreateCard (images[i]);

    }

    for (var i = 0; i < cards.length; i++) {

    	var randomNum = Math.floor(Math.random() * allCards.length);
        allCards[randomNum].divID = i;
        dealtCards.push(allCards[randomNum]);
        allCards.splice(randomNum,1);

    }

	$(".cardImg").click (function () {

		var imgID = parseInt($(this).attr("id"));

		for (var i = 0; i < dealtCards.length; i++) {

			var dealtCardsID = dealtCards[i].divID;

			if (dealtCardsID === imgID) {

				var imgName = dealtCards[i].imageName;
				break;
			}
		}

		document.getElementById(imgID).src = "images/" + imgName;

	})

});
