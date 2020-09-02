var user;
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	$(document).ready(function(){
		user=getCookie("username");
		if (user != "") {
			jQuery('#usernameInput').val(user);
		} else {
			jQuery('#usernameInput').val("User");
		}
	});
}
function OnClickSetCookie(){
	user = jQuery('#usernameInput').val();
	if (user != "" && user != null) {
		setCookie("username", user, 30);
	}
	var language = jQuery('#language').val();
	var nameURL = window.location.hostname;
	var portNumber = window.location.port;
	window.location.href = "http://"+nameURL+":"+portNumber+"/QuickDraw/playgame.php?language="+language;
}