$("#myCarousel").on('slid.bs.carousel', function(evt) {
	switch($(this).find('.active').index()){
		case 0:
			transitionWord("Family", "pages/chapter.html", "Boyertown Senior High School's TSA chapter is a group of hard-working, involved individuals who participate in the community, perform in competition, and fundraise for other organizations like the American Cancer Society.");
		break;
		case 1:
			transitionWord("Charity", "pages/fundraising.html", "Boyertown Senior High School TSA has been one of the leading chapters in the World in terms of fundraising for charity - it is the leader in charity fundraising in PA-TSA, and was one of the top 7 fundraising chapters in the World in 2017.");
		break;
		case 2:
			transitionWord("Fun", "pages/activities.html", "Boyertown Senior High School TSA is constantly planning fun and exciting activities for its members, both to raise money and have a good time.");
		break;
		case 3:
			transitionWord("Excellence", "pages/awards.html", "Boyertown Senior High School TSA has achieved at the Regional, State, and National level over the past few years, securing countless awards for fundraising, community involvement, and competitive event success.");
		break;
		case 4:
			transitionWord("Education", "pages/science.html", "Boyertown Senior High School offers a wide variety of courses in the STEM subject areas, preparing students to live and lead in a technical world.");
		break;
	}
  console.debug("slide transition started")
  console.debug('current slide = ', $(this).find('.active').index())
  console.debug('next slide = ', $(evt.relatedTarget).index())
});

$("#myCarousel").on('slide.bs.carousel', function(evt) {
	var word = document.getElementById("titleTextLink");
	word.style.opacity = "0";
	word = document.getElementById("titleDetailsText");
	word.style.opacity = "0";
});

function transitionWord(newText, newLink, newDesc){
	var word = document.getElementById("titleTextLink");
	word.innerHTML = newText;
	word.href = newLink;
	word.style.opacity = "1";
	word = document.getElementById("titleDetailsText");
	word.innerHTML = newDesc;
	word.style.opacity = "1";
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({container: 'body'});   
});