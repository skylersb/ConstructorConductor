//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore paramters and set them appropriatly

var User = function(name, email, password, totalScore){
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore;
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty paramters

var Question = function(title, answersArray, rightAnswer, difficulty){
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
}

//Create a users Array which is going to hold all of our users.

 var users = [];


//Let's say three people signed up for our service, create 3 intances of User and add each to the users Array

var skyler = new User('skyler', 'skylerblood@gmail.com', 'bomb.com', '100');
var jon = new User('jon', 'jonnyboy@gmail.com', '123pass', '95');
var mark = new User('mark', 'markman@gmail.com', 'm123', '90');

users.push(skyler, jon, mark);


//Create a questions Array which is going to hold all of our questions

 var questions = [];
 var answers = ['T', 'F'];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  var inheritance = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', answers, answers[0], "Hard" );
  var javascript101 = new Question('T/F: JavaScript is just a scripting version of Java', answers, answers[1], "Easy");
  var operators = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", answers, answers[0], "Moderate");



//Now push all of your instances of Question into the questions Array

questions.push(inheritance, javascript101, operators);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

 for(var i = 0; i < users.length; i++){
 	console.log(users);
 	break;
 }

 for(var j = 0; j < questions.length; j++){
 		console.log(questions);
 		break;
 	}

