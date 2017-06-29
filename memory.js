$(document).ready(function() {

	var images = ["chicken.jpg", "chicken.jpg", "batonbob.jpg", "batonbob.jpg", "clermont.jpg", "clermont.jpg", 
					"waffle.jpg", "waffle.jpg", "I85.jpg", "I85.jpg", "kroger.png", "kroger.png",  "peach.jpg", 
					"peach.jpg", "traffic.jpg", "traffic.jpg", "varsity.jpg", "varsity.jpg", "wind.jpg", "wind.jpg"];
	var cards = document.getElementsByClassName("cardImg");
	var allCards = [];
	var dealtCards = [];
	var selected = [];

	//object constructor for cards
	function CreateCard (imageName) {

		this.imageName = imageName;
		this.divID = '';

	}

	//compares selected cards to see if they are a match
	function checkMatch () {

		if (selected[0].imageName === selected[1].imageName) {

			return true;

		} else {

			return false;
		}

	}

	function setImage(divID) {

		var imgName = dealtCards[divID].imageName;
		document.getElementById(divID).src = "images/" + imgName;
		selected.push(dealtCards[divID]);

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

		//If there are less than two cards selected, add class 'selected' and set image src
		if (selected.length < 2) {

			var imgID = $(this).attr("id");
			setImage(imgID);

		}

		if (selected.length === 2) {

			alert(checkMatch());

		}

	})


});
