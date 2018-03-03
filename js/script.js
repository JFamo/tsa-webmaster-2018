$("#myCarousel").on('slid.bs.carousel', function(evt) {
	switch($(this).find('.active').index()){
		case 0:
			transitionWord("Family", "pages/chapter.html", "Boyertown Senior High School's TSA chapter is a group of hard-working, involved individuals who participate in the community, perform in competition, and fundraise for other organizations like the American Cancer Society.");
		break;
		case 1:
			transitionWord("Charity", "pages/fundraising.html", "Boyertown Senior High School TSA has been one of the leading chapters in the world in terms of fundraising for charity - it is the leader in charity fundraising in PA-TSA, and was one of the top 7 fundraising chapters in the World in 2017.");
		break;
		case 2:
			transitionWord("Fun", "pages/activities.html", "Boyertown Senior High School TSA is constantly planning fun and exciting activities for its members, both to raise money and have a good time.");
		break;
		case 3:
			transitionWord("Excellence", "pages/awards.html", "Boyertown Senior High School TSA has achieved at the Regional, State, and National level over the past few years, securing countless awards for fundraising, community involvement, and competitive event success.");
		break;
		case 4:
			transitionWord("Education", "pages/courses.html", "Boyertown Senior High School offers a wide variety of courses in the STEM subject areas, preparing students to live and lead in a technical world.");
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
$(function () {
  $('.officerPic').popover({
    container: 'body'
  })
})

//courses page switching
if(document.getElementById('courses_techlink') != null){
	var courses_active = document.getElementById('courses_techlink');
	document.getElementById('courses_techlink').onclick = function(){ switchCourses("courses_techlink","Technology and Engineering Courses", "Write a brief overview of technology and engineering courses here.","tech.html",true); }
	document.getElementById('courses_sciencelink').onclick = function(){ switchCourses("courses_sciencelink","Science Courses", "Write a brief overview of science courses here.","science.html",true); }
	document.getElementById('courses_mathlink').onclick = function(){ switchCourses("courses_mathlink","Mathematics Courses", "Write a brief overview of math courses here.","math.html",true); }
	document.getElementById('courses_businesslink').onclick = function(){ switchCourses("courses_businesslink","Business Courses", "Write a brief overview of business courses here.","business.html",true); }
	document.getElementById('courses_teacherslink').onclick = function(){ switchCourses("courses_teacherslink","Technology Education Teachers", '<div class="row">			  <div class="col-sm-6">			  	<div class="panel panel-default">				  	<div class="panel-heading"><p class="headerTextType1">Joshua Pennington</p></div>				  	<div class="panel-body">					  	<div class="media">						  <div class="media-left">						    <img src="../img/pennington-30p.jpg" class="img-rounded media-object" style="width:60px">						  </div>						  <div class="media-body">						    <p class="bodyTextType1">Mr. Pennington has been teaching for 12 years. He went to California University of Pennsylvania to get a bachelor\'s degree in Technology Education and a master’s degree in Classroom Technology. He teaches Photo Imaging, Digital Communications, Multimedia and Communication Research and Development. Mr. Pennington sees technology use in the classroom as a way to take things that we learn school and apply them into situations that we can use in the real world.</p>						  </div>						</div>					</div>				</div>			  </div>			  <div class="col-sm-6">			  	<div class="panel panel-default">				  <div class="panel-heading"><p class="headerTextType1">Chad Roth</p></div>				  <div class="panel-body">				  	<div class="media">						  <div class="media-left">						    <img src="../img/roth-30p.jpg" class="img-rounded media-object" style="width:60px">						  </div>						  <div class="media-body">						    <p class="bodyTextType1">Mr. Roth has been teaching for 17 years. He went to Millersville University for both his bachelor\’s degree in Technology Education and master’s in Elementary Education. He teaches classes such as Tech and Engineering, Architecture Design and Robotics. Mr. Roth is interested in all things engineering (especially robotics) and he decided to teach these classes specifically because of the nice spin on engineering they provide. He uses technology in the classroom to help engage students, make the concepts that are taught relevant and to prepare students for jobs outside of high school that are reliant on technology.</p>						  </div>						</div>				  </div>				</div>			  </div>			</div>			<div class="row">			  <div class="col-sm-6">			  	<div class="panel panel-default">				  	<div class="panel-heading"><p class="headerTextType1">Jason Valick</p></div>				  	<div class="panel-body">					  	<div class="media">						  <div class="media-left">						    <img src="../img/valik-30p.jpg" class="img-rounded media-object" style="width:60px">						  </div>						  <div class="media-body">						    <p class="bodyTextType1">Mr. Valick has been teaching for 24 years. He went to Millersville University to get a bachelor\’s  degree in Technology Education and went to Ball State University to get his master\’s degree.  He teaches classes such as Tech Drawing and Design, Architecture Design, Engineering Design and Tech Research and Development. Mr. Valick decided to teach these courses because he enjoys the design aspects of engineering. Mr. Valick thinks if we aren’t coming up with new ways and technologies to help students we are going to go backwards as a society.</p>						  </div>						</div>					</div>				</div>			  </div>			  <div class="col-sm-6">			  	<div class="panel panel-default">				  <div class="panel-heading"><p class="headerTextType1">Kenneth Burton</p></div>				  <div class="panel-body">				  	<div class="media">						  <div class="media-left">						    <img src="../img/burton-30p.jpg" class="img-rounded media-object" style="width:60px">						  </div>						  <div class="media-body">						    <p class="bodyTextType1">Mr. Burton has been teaching for 24 years. He went to Millersville University for his undergraduate degree and Rochester Institute of Technology for graduate school. Holding a bachelor\’s degree in Industrial Arts Education and a master\’s in Woodworking and Furniture Design, Mr. Burton teaches classes such as Residential Construction, Engineering Materials and Material Technology because he likes sharing how to make things. As far as technology\’s role in education, Mr. Burton is deeply concerned we are raising a generation of people that do not know how to do anything, and he is trying to combat that.</p>						  </div>						</div>				  </div>				</div>			  </div>			</div>' ,"#",false); }
	document.getElementById('courses_clubslink').onclick = function(){ switchCourses("courses_clubslink","STEM Clubs at Boyertown", '<div class="row">			  <div class="col-sm-6">			  	<div class="panel panel-default">				  	<div class="panel-heading"><p class="headerTextType1">TSA FLEX</p></div>				  	<div class="panel-body">						<p class="bodyTextType1">Available exclusively to TSA Members in all grades, TSA Flex is time for students to work on individual and group projects in a collaborative group with other TSA members. TSA students are able to design, build, test, and create innovative solutions to TSA event problems while having an excellent community of peers to work with, get ideas from, and to give and receive help on a daily basis. This FLEX is an ideal way to keep events on track, and to use school time wisely to stay ahead on their projects. Students in the TSA homeroom will automatically be placed into the TSA FLEX.</p>					</div>				</div>			  </div>			  <div class="col-sm-6">			  	<div class="panel panel-default">				  <div class="panel-heading"><p class="headerTextType1">Science Olympiad</p></div>				  <div class="panel-body">						<p class="bodyTextType1">Science Olympiad is a club available at Boyertown Senior High School. In the club, students with an aptitude for the sciences compete at an olympiad competition, which offers a variety of science-related events. Members of the club will meet after school to prepare for their events with their teams, and gain a more in-depth understanding of STEM topics than their normal classes may offer. Some areas of competition include anatomy and physiology, cell biology, ecology and fossils.</p>				  </div>				</div>			  </div>			</div>			<div class="row">			  <div class="col-sm-6">			  	<div class="panel panel-default">				  	<div class="panel-heading"><p class="headerTextType1">Computer Hackers</p></div>				  	<div class="panel-body">						<p class="bodyTextType1">This free period opportunity involves high school students who like to program or play video games and want to bring the hackathon culture into their school. Learn how to create a simple web page using CSS, sample programming using Java, build your own game app and learn from others how to publish it. This group is about empowering students to imagine and achieve their future dreams in technology.</p>					</div>				</div>			  </div>			  <div class="col-sm-6">			  	<div class="panel panel-default">				  <div class="panel-heading"><p class="headerTextType1">Technology Help Desk</p></div>				  <div class="panel-body">						<p class="bodyTextType1">The Technology Help Desk has proven to be an invaluable support to the students and school. Students who have an interest and ability with computers are able to receive training from the school\’s IT department, and then will be working with fellow classmates and staff members to support their technology needs and help trouble shoot problems. There is the potential to turn this into an internship as well as receive credit on their transcripts.</p>				  </div>				</div>			  </div>			</div>			<div class="row">			  <div class="col-sm-6">			  	<div class="panel panel-default">				  	<div class="panel-heading"><p class="headerTextType1">Future Business Leaders of America</p></div>				  	<div class="panel-body">						<p class="bodyTextType1">The Boyertown FBLA group competes in events against other teams from across the state, similarly to how TSA works. Each year, they hold a \'Scarf Day\', where students can buy stickers throughout the week, and wear their stickers on a scarf that Friday. Proceeds from the 2017 Scarf Day went to hurricane relief. They fundraise for their club by selling Gertrude Hawk chocolate, and the club gives them an opportunity to complete their job shadow early - a requirement for graduation at Boyertown. Events include business events, technology events, and a quizbowl.</p>					</div>				</div>			  </div>			  <div class="col-sm-6">			  	<div class="panel panel-default">				  <div class="panel-heading"><p class="headerTextType1">Math Team</p></div>				  <div class="panel-body">						<p class="bodyTextType1">The Boyertown Math Team is a group of mathematically-minded individuals who meet multiple times a month to complete math tests. The team competes in two circuts against other schools in the area. For each test, the student earning the highest score has their test submitted for the team.</p>				  </div>				</div>			  </div>			</div>',"#",false); }
	document.getElementById('courses_projectslink').onclick = function(){ switchCourses("courses_projectslink","Student Projects", "Add stuff about student projects here.","#",false); }
}

function switchCourses(newCourseLink, newCourseHeader, newCourseBody, newCourseButton, hasButton){
	courses_active.className = "nav-link text-danger";
	var newlink = document.getElementById(newCourseLink);
	newlink.className = "nav-link active bg-danger";
	courses_active = newlink;
	document.getElementById('courses_title').innerHTML = newCourseHeader;
	document.getElementById('courses_body').innerHTML = newCourseBody;
	if(hasButton){
		document.getElementById('courses_button').href = newCourseButton;
		document.getElementById('courses_button').style.display = 'inline';
	}
	else{
		document.getElementById('courses_button').style.display = 'none';
	}
}
