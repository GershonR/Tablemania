$(function() {

  var registerMode = false;
	
	$(".register").css("visibility", "hidden");
	$(".register").hide();
	$("#loginFailureNotice").hide();
	
	$("#signupBtn").click(function(){
		$("#signupBtn").prop("disabled", true);
		$("#confirmBtn").attr({value: "Sign up"});
		$("#signupBtn").css({"background-color":"#9ce5be", "outline":"0"});
		$("#confirmBtn").animate({top: "+195px"});
		$("#username").attr("placeholder", "username");
		$(".login").animate({top: "+146px"}, showRegisterFields);
		$(".login").animate({top: "+0px"}, 1);
		$("#confirmBtn").animate({top: "+0px"}, 1);
    registerMode = true;
	});

  $("#confirmBtn").click(function(){
    if(registerMode == false) {
      if($("#username").val() == "admin" && $("#password").val() == "password") {
		  window.location.href = "loggedin.html"; //placeholder for actual logged in page
		//alert("login successful");
	  } else {
		  //show "login failed" message
		  //alert("login failed");
		  $("#loginFailureNotice").show();
	  }
    }
  });
});

function showRegisterFields() {
	$(".register").css("visibility", "visible");
	$(".register").fadeIn();
}
