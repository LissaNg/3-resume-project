var data = "%data%";

var bio = {
    "name": "Lissa Ng",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Hello World!",
    "contacts": {
        "mobile": "333.333.333",
        "email": "notanemail@gmail.com",
        "github": "lis_ng",
        "location": "Washington, DC"
    },
    "skills": ["HTML", "CSS", "JavaScript"],
    "biopic": "images/myAvatar.png",
    //Function to show bio object
    display : function() {
    if (bio.name.length > 0) {
        var myRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(myRole);
        var myName = HTMLheaderName.replace(data, bio.name);
        $("#header").prepend(myName);
        var bioPic = HTMLbioPic.replace(data, bio.biopic);
        $("#header").append(bioPic);
        var formattedBioWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $('#header').append(formattedBioWelcomeMessage);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
    }
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}
};
bio.display();

var education = {
    "schools": [{
            "name": "San Gabriel",
            "location": "Santo Domingo",
            "degree": "High School",
            "dates": "2006-2010",
            "url": "sangabriel.com",
            "majors": ["lorem", "ipsum"]
        },
        {
            "name": "Cambridge College",
            "location": "Cambridge, MA",
            "degree": "Bachelors",
            "dates": "2012",
            "url": "cambridgecollege.com",
            "majors": ["Finance", "Accounting"]
        }
    ],
    "onlineCourses": [{
            "title": "Web Dev",
            "school": "FreeCodeCamp",
            "dates": "2015",
            "url": "www.freecodecamp.org"
        },
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ],
    display : function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {

        var formattedName = HTMLschoolName.replace(data, school.name);
        $(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace(data, school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
        $(".education-entry:last").append(formattedMajor);
    });


    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace(data, course.title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace(data, course.school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace(data, course.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace(data, course.url);
        $(".education-entry:last").append(formattedUrl);
    });

}
};

education.display();

var work = {
    "jobs": [{
            "employer": "Innovaterisco",
            "title": "Web Designer, WordPress",
            "location": "Santo Domingo, DR",
            "dates": "2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "employer": "BNY Mellon",
            "title": "Mutual Funds Custody",
            "location": "Everett, MA",
            "dates": "2013-2015",
            "description": "lorem ipsum, blatsy blatsy"
        }
    ],
//Tried to add function inside of object but did not work
    display: function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedDates = HTMLworkDates.replace(data, job.dates);
        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        var formattedDescription = HTMLworkDescription.replace(data, job.description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);

    })
}

};

work.display();

var projects = {
    "projects": [{
            "title": "Fundacion Sigue Mis Pasos",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "images": [
                "images/siguemispasos.png", "images/siguemispasos.png"
            ]
        },
        {
            "title": "Yo Amo RD",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "images": [
                "images/amord.png", "images/amord.png"
            ]
        }
    ],
    display : function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedDescription);


        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace(data, image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
}
};

projects.display();

//This variable will make it easier to sub to real data


//Function to show bio object
// bio.display = function() {
//     if (bio.name.length > 0) {
//         var myRole = HTMLheaderRole.replace(data, bio.role);
//         $("#header").prepend(myRole);
//         var myName = HTMLheaderName.replace(data, bio.name);
//         $("#header").prepend(myName);
//         var bioPic = HTMLbioPic.replace(data, bio.biopic);
//         $("#header").append(bioPic);
//         var formattedBioWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
//         $('#header').append(formattedBioWelcomeMessage);
//         var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
//         var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
//         var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
//         var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
//         $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
//     }
//     if (bio.skills.length > 0) {
//         $("#header").append(HTMLskillsStart);
//         for (var i = 0; i < bio.skills.length; i++) {
//             var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
//             $("#skills").append(formattedSkill);
//         }
//     }
// };

// bio.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


// projects.display = function() {
//     projects.projects.forEach(function(project) {
//         $("#projects").append(HTMLprojectStart);

//         var formattedTitle = HTMLprojectTitle.replace(data, project.title);
//         $(".project-entry:last").append(formattedTitle);

//         var formattedDates = HTMLprojectDates.replace(data, project.dates);
//         $(".project-entry:last").append(formattedDates);

//         var formattedDescription = HTMLprojectDescription.replace(data, project.description);
//         $(".project-entry:last").append(formattedDescription);


//         if (project.images.length > 0) {
//             project.images.forEach(function(image) {
//                 var formattedImage = HTMLprojectImage.replace(data, image);
//                 $(".project-entry:last").append(formattedImage);
//             });
//         }
//     });
// };


// projects.display();


// education.display = function() {
//     $("#education").append(HTMLschoolStart);
//     education.schools.forEach(function(school) {

//         var formattedName = HTMLschoolName.replace(data, school.name);
//         $(".education-entry:last").append(formattedName);
//         var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
//         $(".education-entry:last").append(formattedDegree);
//         var formattedDates = HTMLschoolDates.replace(data, school.dates);
//         $(".education-entry:last").append(formattedDates);
//         var formattedLocation = HTMLschoolLocation.replace(data, school.location);
//         $(".education-entry:last").append(formattedLocation);
//         var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
//         $(".education-entry:last").append(formattedMajor);
//     });


//     $("#education").append(HTMLonlineClasses);
//     education.onlineCourses.forEach(function(course) {
//         $("#education").append(HTMLschoolStart);
//         var formattedTitle = HTMLonlineTitle.replace(data, course.title);
//         $(".education-entry:last").append(formattedTitle);
//         var formattedSchool = HTMLonlineSchool.replace(data, course.school);
//         $(".education-entry:last").append(formattedSchool);
//         var formattedDates = HTMLonlineDates.replace(data, course.dates);
//         $(".education-entry:last").append(formattedDates);
//         var formattedUrl = HTMLonlineURL.replace(data, course.url);
//         $(".education-entry:last").append(formattedUrl);
//     });

// };

// education.display();

$("#mapDiv").append(googleMap);

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
            var x = loc.pageX;
            var y = loc.pageY;

            logClicks(x, y);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});

initializeMap();
