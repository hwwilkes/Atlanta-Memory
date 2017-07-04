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

		this.cardFront = imageName;
		this.divID = '';
		this.cardBack = '';

	}

	//compares cards in selected array to see if they are a match.
	function checkMatch () {

		if (selected[0].cardFront === selected[1].cardFront) {

			return true;

		} else {

			return false;
		}

	}

	//Sets img src of div to image in cardFront property of object.
	function setImage(divID) {

		var imgName = dealtCards[divID].cardFront;
		document.getElementById(divID).src = 'images/' + imgName;

	}

	//Create a card object for each card div. Set cardBack property to image name from images array.
	for (var i = 0; i < cards.length; i++) {

		allCards[i] = new CreateCard (images[i]);

    }

    //Associate a random div to each card object and push to dealtCards array once 'dealt'. 
    //Also, set cardBack property to current image source. 
    for (var i = 0; i < cards.length; i++) {

    	var randomNum = Math.floor(Math.random() * allCards.length);
        allCards[randomNum].divID = i;
        allCards[randomNum].cardBack = document.getElementById(i).src;
        dealtCards.push(allCards[randomNum]);
        allCards.splice(randomNum,1);

    }


	$(".cardImg").click (function () {

		//If there are less than two cards selected, show card front and push card to selected array.
		if (selected.length < 2 && !($(this).hasClass("matched"))) {

			var imgID = $(this).attr("id");
			setImage(imgID);
			selected.push(dealtCards[imgID]);

		}

		//If two cards are selected, call checkMatch() to see if they are a match.  
		//If yes, keep card front showing. 
		//If no, flip them back over to show card back. 
		if (selected.length === 2) {

			//Had to wrap all of this in a setTimeout. Otherwise, checkMatch() would fire and reset image before cardBack was revealed.
			setTimeout(function() {

				var match = checkMatch();

				if (!match) {

					for (var i = 0; i < selected.length; i++) {

						var cardBack = selected[i].cardBack;
						document.getElementById(selected[i].divID).src = cardBack;
					}

				} else {

					for (var i = 0; i < selected.length; i++) {

						var matchedID = selected[i].divID;
						$("#"+matchedID).addClass("matched");
					}

				}

			selected = [];

			}, 1000);

		}

	})


});
