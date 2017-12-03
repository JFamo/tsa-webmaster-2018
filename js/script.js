$("#myCarousel").on('slid.bs.carousel', function(evt) {
	switch($(this).find('.active').index()){
		case 0:
			transitionWord("Education", "pages/courses.html");
		break;
		case 1:
			transitionWord("Family", "pages/chapter.html");
		break;
		case 2:
			transitionWord("Charity", "pages/fundraising.html");
		break;
		case 3:
			transitionWord("Fun", "pages/activities.html");
		break;
		case 4:
			transitionWord("Excellence", "pages/awards.html");
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

function transitionWord(newText, newLink){
	var word = document.getElementById("titleTextLink");
	word.innerHTML = newText;
	word.href = newLink;
	word.style.opacity = "1";
}

