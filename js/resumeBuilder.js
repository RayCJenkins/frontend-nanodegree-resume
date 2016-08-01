//var awesomeThoughts = "I am Raymond and I am AWESOME";
//$("#main").append("Raymond Jenkins");
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);
//var myName = "Raymond Jenkins";
//var myRole = "FEND Ninja";
//var formattedName = HTMLheaderName.replace("%data%", myName);
//var formattedRole = HTMLheaderRole.replace("%data%", myRole);
//$("#main").prepend(formattedRole);
//$("#main").prepend(formattedName);
//var s = "audacity";
//var name = "alBert Einstein"
//var j = name.indexOf(" ");
//var newName = name.slice(0,1).toLocaleUpperCase() + name.slice(1,j-1).toLocaleLowerCase() + name.slice(j+1).toLocaleUpperCase();
var bio = {
	"name": "Raymond Jenkins",
	"role": "FEND Ninja",
	"welcomemessage": "This is my bio. WELCOME!",
	"biopic": "https://pbs.twimg.com/profile_images/90039086/RayFaceShot.jpg",
	"contactinfo": {
		"mobile": "999-1234", 
		"email": "ray@coolcorp.com",
		"guthub": "RayCJenkins",
		"twitter": "@Refoax",
		"locaction": "West Jordan, UT"
	},
	"skills": ["Delphi", "OO-Design", "Database Design"]
}
var work = {
	"jobs": [
		{
			"employer": "Jackson & Jenkins",
			"title": "Laborer",
			"locaction": "South Jordan, UT",
			"dates": "1987-1992"
		},
		{
			"employer": "Cirris Systems Corp",
			"title": "Developer",
			"locaction": "Salt Lake City, UT",
			"dates": "1992-present"
		}
	]
};
var projects = {
	"projects":[
		{
			"title": "DSAMS - Sales and Marketing",
			"dates": "1993-2010",
			"description": "Managed Sales Contack, Order Information and Marketing Campaigns"
		},
		{
			"title": "Cirris Interface Builder",
			"dates": "2015-2016",
			"description": "Tool to create XML files that describe Screens and Buttons. Can be localized"
		}
	]
};

education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.
var education = {
	"schools": [
		{
			"name": "BYU",
			"location": "Provo, UT",
			"degreedates": "1992",
			"degreeurls": "http://byu.edu",
			"major": ["Computer Science", "Math"]
		},
		{
			"name": "SLCC",
			"location": "West Valley, UT",
			"degreedates": "2008",
			"degreeurls": "http://slcc.edu",
			"major": ["Computer Science"]
		}
		],
		"onlineCourses":[
		{
			"title": "Introduction to Javascript",
			"school": "Udacity",
			"dates": "2015-2016",
			"url": "https://udacity.com/FEND"
		},
		{
			"title": "Introduction to JQUERY",
			"school": "Udacity",
			"dates": "2015-2016",
			"url": "https://udacity.com/FEND"
		}]
	};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picutreurl);
var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", bio.contactinfo);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data", bio.welcomemessage);
$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);
$("#main").append(formattedBioPic);
$("#main").append(formattedContactInfo);
$("#main").append(formattedWelcomeMessage);
$("#main").append(work_info["position"]);
$("#main").append(education.School);

