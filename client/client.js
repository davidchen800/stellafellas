var Router = Backbone.Router.extend({
  routes: {
    "":                 "main", //this will be http://your_domain/
    "signup":                 "signup",
    "profile":                 "profile",
    "categories":             "categories"  // http://your_domain/help
  },

  main: function() {
    // Your homepage code
    // for example: Session.set('currentPage', 'homePage');
    onMain();
  },

  signup: function() {
    // Help page
    onSignup();
  },
  profile: function() {
    // Help page
    onProfile();
  },
  categories: function() {
    // Help page
    onCategories();
  },
});
var app = new Router;
Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});
function allOff(){
  var contentId = document.getElementById("signer");
  // Toggle 
  contentId.style.display = "none"; 
   contentId = document.getElementById("profiler");
  // Toggle 
  contentId.style.display = "none"; 
  contentId = document.getElementById("categorizer");
  // Toggle 
  contentId.style.display = "none"; 
  contentId = document.getElementById("mainer");
  // Toggle 
  contentId.style.display = "none"; 
}
function onMain() {
  // Get the DOM reference
  allOff();
  var contentId = document.getElementById("mainer");
  // Toggle 
  contentId.style.display = "block"; 
}
function onSignup() {
  // Get the DOM reference
  allOff();
  var contentId = document.getElementById("signer");
  // Toggle 
  contentId.style.display = "block"; 
}
function onProfile() {
  // Get the DOM reference
  allOff();
  var contentId = document.getElementById("profiler");
  // Toggle 
  contentId.style.display = "block"; 
}
function onCategories() {
  // Get the DOM reference
  allOff();
  var contentId = document.getElementById("categorizer");
  // Toggle 
  contentId.style.display = "block"; 
}
Meteor.loginAsAdmin = function(password, callback) {
  //create a login request with admin: true, so our loginHandler can handle this request
  var loginRequest = {admin: true, password: password};

  //send the login request
  Accounts.callLoginMethod({
    methodArguments: [loginRequest],
    userCallback: callback
  });
};
Template.app.events({
 	'click button': function(evt){
 		var interest = evt.target.parentElement.querySelector('input').value;
 		console.log(interest);
 	}
});
Template.list.events({
	'click button': function(evt){
		var checked = []
		$("input[name='interest']:checked").each(function ()
		{
		    checked.push($(this).val());
		});
		console.log(checked);
		//Users.getUser(id).update(id, checked)
	}
})
