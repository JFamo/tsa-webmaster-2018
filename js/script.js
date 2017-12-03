$("#myCarousel").on('slid.bs.carousel', function(evt) {
	switch($(this).find('.active').index()){
		case 0:
			transitionWord("Education");
		break;
		case 1:
			transitionWord("Family");
		break;
		case 2:
			transitionWord("Charity");
		break;
		case 3:
			transitionWord("Fun");
		break;
		case 4:
			transitionWord("Excellence");
		break;
	}
  console.debug("slide transition started")
  console.debug('current slide = ', $(this).find('.active').index())
  console.debug('next slide = ', $(evt.relatedTarget).index())
});

$("#myCarousel").on('slide.bs.carousel', function(evt) {
	var word = document.getElementById("titleTextLink");
	word.style.opacity = "0";
});

function transitionWord(newText){
	var word = document.getElementById("titleTextLink");
	word.innerHTML = newText;
	word.style.opacity = "1";
}

