var starterlogRef = new Firebase("https://starterlog.firebaseio.com/");
var starter = null;

// handle session
var authClient = new FirebaseAuthClient(starterlogRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);

  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider + ', Display Name: ' + user.displayName + ', Username: ' + user.username);
  	$("#loginDiv").empty();
  	var logoutLink = "<br><a id='logout' href='#' onClick='onLogoutBtnClicked()'> <u><b> (Logout)</b></u></a>";
  	$("#loginDiv").html("Welcome @" + user.username + "!  " + logoutLink);

  } else {
    // user is logged out
    $("#loginDiv").empty();
    var loginLink = "<a id='login' href='#' onClick='onLoginBtnClicked()'><img src='img/social/twitter_gray.png'/></a>";
    $("#loginDiv").html(loginLink);
  }
});

// handle login
function onLoginBtnClicked() {
	console.log("Login Btn Clicked");
	authClient.login('twitter');
};	

// handle logout
function onLogoutBtnClicked() {
	console.log("Logout Btn Clicked");
	authClient.logout();
	
};

	
	

