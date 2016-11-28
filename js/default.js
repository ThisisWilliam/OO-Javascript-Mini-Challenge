// 1. Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and 
// from then on whatever the current value is times the number supplied.
// getCurrentValue should return the last answer returned from multiply.

//as a function
function Multiplier(n) {
	this.currentValue = 1;
	
	this.multiply = function(){
		this.currentValue = n * this.currentValue;
		return this.currentValue;
	}

	this.getCurrentValue = function(){
		console.log(this.currentValue);
	}
}

//as an object
var Multiplier = {
	currentValue: 1,
	
	multiply: function(n) {
		this.currentValue = n * this.currentValue;
		return this.currentValue;
	},

	getCurrentValue: function() {
		console.log(this.currentValue);
	}
}

// 2. Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken in as strings. 
// Create instances of each object defined to prove that your object model works.

//Version 2

// function Photo(name, url) {
// 	this.name = name;
// 	this.url = url;
// 	this.getImageTag = function getImageTag() {
// 	  return '<img src="' + this.url + '" name="' + this.name + '" />'
// 	}
// 	return this;
// }

// function Album() {
// 	this.photos = [];

// 	this.addPhoto = function addPhoto(photo) { /
// 		console.log('Added photo: ' + photo.name);
// 	};
// 	this.listPhotos = function() { 
// 		for (var i = 0; i < this.photos.length; i ++) {
// 			console.log(this.photos[i].getImageTag());
// 		}
// 	}
// 	return this;
// }


//Version 1
function Photo(name, url) {
	this.name = name;
	this.url = url;
}

function Album() {
	this.photos = [];

	this.addPhoto = function addPhoto(photo) { 
		this.photos.push(photo);
		console.log(photo.name);
	};
	this.listPhotos = function() { 		
		for (var i = 0; i < this.photos.length; i ++) {
			console.log(this.photos[i]);
		}
	}
}


var myPhotos = ["photo1", "photo2"];

var myAlbum = new Album(myPhotos)

var vacationAlbum = new Album();
var yellowstone = new Photo("yellowstone", "img1.jpg");
var smokeyMtns = new Photo("smokeyMtns", "img2.jpg");
vacationAlbum.addPhoto(yellowstone);
vacationAlbum.addPhoto(smokeyMtns);
vacationAlbum.listPhotos();



// 3. Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers. 
// Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well 
// and you're able to store the necessary data in each object.
function Person(fname, lname) {
	this.isAlive = true;
	this.firstName = fname;
	this.lastName = lname;
}

function Teacher(fname, lname, subject) {
	this.subject = subject;
	this.fullTime = true;
	this.salary = function() {
		console.log("Annual salary = $60,000");
	};
	Person.apply(this, arguments);
}

function Student(fname, lname, grade) {
	this.grade = grade;
	this.detention = false;
	this.stats = function() {
		console.log(fname + " " + lname + " is in grade: " + grade);
	}
	Person.apply(this, arguments);
}

function School() {
	this.studentRoster = [];
	this.faculty = [];

	this.addStudent = function (pupil) { 
		this.studentRoster.push(pupil);
	};

	this.addTeacher = function (staffMember) { 
		this.faculty.push(staffMember);
	};
}

var Aimee = new Teacher("Mary", "K", "Math");
var Jackie = new Teacher("Jackie", "S", "English");
var Dawn = new Teacher("Tom", "L", "Library");

var Erynn = new Student("Bob", "B", 10);
var Heather = new Student("Mike", "B", 8);
var Rhys = new Student("Jim", "M", 1);

var hogwarts = new School;

hogwarts.addStudent(Bob);
hogwarts.addStudent(Mike);
hogwarts.addStudent(Jim);

hogwarts.addTeacher(Mary);
hogwarts.addTeacher(Jackie);
hogwarts.addTeacher(Tom);