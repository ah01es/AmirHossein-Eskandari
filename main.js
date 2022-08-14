function Button_onclick() {
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	


	var patt = /[^a-z]/
	var patt2 = /\D/
	if((!patt.test(user)) && (!patt2.test(pass)))
	{
		localStorage.setItem('finalUsername',user);
		localStorage.setItem('finalpassword',pass);
		window.open("pag2.html");
		
	}

    else if (patt.test(user))
	document.getElementById('usererror').innerHTML = "نام کاربری شما غیر مجاز است";

    else if (patt2.test(pass))
	document.getElementById('passerror').innerHTML = "رمز شما غیر مجاز است";

	
}