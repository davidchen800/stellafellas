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
