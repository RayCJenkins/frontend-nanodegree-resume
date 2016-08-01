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
// var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data", bio.welcomemessage);
// $("#main").append(formattedContactInfo);
// $("#main").append(formattedWelcomeMessage);
//$("#main").append(work["position"]);
//$("#main").append(education.schools[0].name);
var bio = {
    "name": "Raymond Jenkins",
    "role": "FEND Ninja",
    "welcomemessage": "This is my bio. WELCOME!",
    "biopic": "images/fry.jpg",
    "contactinfo": {
        "mobile": "999-1234",
        "email": "ray@coolcorp.com",
        "guthub": "RayCJenkins",
        "twitter": "@Refoax",
        "locaction": "West Jordan, UT"
    },
    "skills": ["Delphi", "OO-Design", "Database Design"]
};
var work = {
    "jobs": [
        {
            "employer": "Jackson & Jenkins",
            "title": "Laborer",
            "location": "South Jordan, UT",
            "dates": "1987-1992",
            "description": "Jackson and Jenkins was in JavaScript. You'll be breaking them down as part of" +
                           "a quiz. Essentially, the next few lines are checking to see if you have not " +
                           "changed each section of the resume. If you have not made any changes to a section " +
                           "of the resume, then that part of the resume does not show up. More on this in the" +
                           "course."
        },
        {
            "employer": "Cirris Systems Corp",
            "title": "Developer",
            "location": "Salt Lake City, UT",
            "dates": "1992-present",
            "description": "Cirris Systems Corp was JavaScript. You'll be breaking them down as part of" +
                           "a quiz. Essentially, the next few lines are checking to see if you have not " +
                           "changed each section of the resume. If you have not made any changes to a section " +
                           "of the resume, then that part of the resume does not show up. More on this in the" +
                           "course."
        }
    ]
};  
var projects = {
    "projects": [
        {
            "title": "DSAMS - Sales and Marketing",
            "dates": "1993-2010",
            "description": "Managed Sales Contack, Order Information and Marketing Campaigns",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        },
        {
            "title": "Cirris Interface Builder",
            "dates": "2015-2016",
            "description": "Tool to create XML files that describe Screens and Buttons. Can be localized",
            "images": ["images/fry.jpg", "images/fry.jpg", "images/fry.jpg"]
        }
    ]
};
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
    "onlineCourses": [
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
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", bio.contactinfo.toLocaleUpperCase);

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);
$("#main").append(formattedBioPic);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(i = 0; i < bio.skills.length; i++){
    	var my_skill = HTMLskills.replace("%data%", bio.skills[i]);
    	$("#skills").append(my_skill);
    }
}
function displayWork(){
    for(i in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedRole = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployer + formattedRole);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();
$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});

projects.display = function() {
    for(i in projects.projects){
    	$("#projects").append(HTMLprojectStart);
        var project_title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var project_dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var project_desc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(project_title);
        $(".project-entry:last").append(project_dates);
        $(".project-entry:last").append(project_desc);

        for(j in projects.projects[i].images){
            var project_image = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(project_image);

        }
    }
};
projects.display();
$("#mapDiv").append(googleMap);
