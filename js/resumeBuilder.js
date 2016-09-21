var bio = {
    "name": "Raymond Jenkins",
    "role": "FEND Ninja",
    "contacts": {
        "mobile": "999-1234",
        "email": "ray@coolcorp.com",
        "github": "RayCJenkins",
        "twitter": "@Refoax",
        "location": "West Jordan, UT"
    },
    "welcomeMessage": "Software Developer able to create great software for your business needs.",
    "skills": ["Software Engineering", "C", "Delphi", "OO-Design", "Database Design", "SQL", "Agile Methodologies"],
    "biopic": "images/Ray_and_his_kindle.webp",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);

        var main = $("#main");
        var header = $("#header");
        var top_contacts = $("#topContacts");
        var footer_contacts = $("#footerContacts");

        main.prepend(formattedRole);
        main.prepend(formattedName);
        header.append(formattedBioPic);
        header.append(formattedWelcomeMessage);
        top_contacts.append(formattedMobile);
        top_contacts.append(formattedEmail);
        top_contacts.append(formattedGitHub);
        top_contacts.append(formattedTwitter);
        footer_contacts.append(formattedMobile);
        footer_contacts.append(formattedEmail);
        footer_contacts.append(formattedGitHub);
        footer_contacts.append(formattedTwitter);
        if (bio.skills.length > 0) {
            header.append(HTMLskillsStart);
            var my_skills = $("#skills");
            bio.skills.forEach(function(skill) {
                var my_skill = HTMLskills.replace("%data%", skill);
                my_skills.append(my_skill);
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "BYU",
        "location": "Provo, UT",
        "degree": "Computer Science",
        "majors": ["Computer Science", "Math"],
        "dates": "1987-1992",
        "url": "http://byu.edu"
    }, {
        "name": "SLCC",
        "location": "West Valley, UT",
        "degree": "Computer Science",
        "majors": ["Computer Science"],
        "dates": "1992-2008",
        "url": "http://slcc.edu",
    }],
    "onlineCourses": [{
        "title": "Introduction to Javascript",
        "school": "Udacity",
        "dates": "2015-2016",
        "url": "https://udacity.com/FEND"
    }, {
        "title": "Introduction to JQUERY",
        "school": "Udacity",
        "dates": "2015-2016",
        "url": "https://udacity.com/FEND"
    }],
    "display": function() {
        var my_education = $("#education");
        education.schools.forEach(function(school) {
            my_education.append(HTMLschoolStart);
            var education_entry = $(".education-entry:last");
            var schoolName = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
            schoolName = schoolName.replace("#", school.url);
            var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            education_entry.append(schoolName);
            education_entry.append(schoolDates);
            education_entry.append(schoolLocation);
            education_entry.append(schoolMajor);
        });
        if (education.onlineCourses.length > 0) {
            my_education.append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(onlineClass) {
                my_education.append(HTMLonlineClassStart);
                var onlineclass_entry = $(".onlineclass-entry");
                var classTitle = HTMLonlineTitle.replace("#", onlineClass.url);
                classTitle = classTitle.replace("%data%", onlineClass.title) + HTMLonlineSchool.replace("%data%", onlineClass.school);
                var classDates = HTMLonlineDates.replace("%data%", onlineClass.dates);
                var classOnlineURL = HTMLonlineURL.replace("%data%", onlineClass.url);

                onlineclass_entry.append(classTitle);
                onlineclass_entry.append(classDates);
                onlineclass_entry.append(classOnlineURL);
            });
        }

    }
};

var work = {
    "jobs": [{
        "employer": "Jackson & Jenkins",
        "title": "Laborer",
        "location": "South Jordan, UT",
        "dates": "1987-1992",
        "description": "Jackson and Jenkins was in JavaScript. You'll be breaking them down as part of" +
            "a quiz. Essentially, the next few lines are checking to see if you have not " +
            "changed each section of the resume. If you have not made any changes to a section " +
            "of the resume, then that part of the resume does not show up. More on this in the" +
            "course."
    }, {
        "employer": "Cirris Systems Corp",
        "title": "Developer",
        "location": "Salt Lake City, UT",
        "dates": "1992-present",
        "description": "Cirris Systems Corp was JavaScript. You'll be breaking them down as part of" +
            "a quiz. Essentially, the next few lines are checking to see if you have not " +
            "changed each section of the resume. If you have not made any changes to a section " +
            "of the resume, then that part of the resume does not show up. More on this in the" +
            "course."
    }],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedRole = HTMLworkTitle.replace("%data%", job.title);
            var formattedDate = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedRole);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "DSAMS - Sales and Marketing",
        "dates": "1993-2010",
        "description": "Managed Sales Contact, Order Information and Marketing Campaigns",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "title": "Cirris Interface Builder",
        "dates": "2015-2016",
        "description": "Tool to create XML files that describe Screens and Buttons. Can be localized",
        "images": ["images/fry.jpg", "images/fry.jpg", "images/fry.jpg"]
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var project_title = HTMLprojectTitle.replace("%data%", project.title);
            var project_dates = HTMLprojectDates.replace("%data%", project.dates);
            var project_desc = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(project_title);
            $(".project-entry:last").append(project_dates);
            $(".project-entry:last").append(project_desc);

            project.images.forEach(function(image) {
                var project_image = HTMLprojectImage.replace("%data%", image);
                project_image = project_image.replace("%alt%", image);
                $(".project-entry:last").append(project_image);
            });
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();



$("#mapDiv").append(googleMap);