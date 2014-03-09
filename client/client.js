
Template.app.events({
 	'click button': function(evt){
 		var interest = evt.target.parentElement.querySelector('input').value;
 		console.log(interest);
 	}
});
