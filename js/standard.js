function autoFireLightbox() 
{
	setTimeout(function() 
	{
		if(document.location.hash && $(document.location.hash.substr(1)).rel.indexOf('lightbox')!=-1) 
		{
			myLightbox.start($(document.location.hash.substr(1)));
		}
	},
		250
	);
}
//Event.observe(window, 'load', autoFireLightbox, false);


/*##########*/
/*   LOGIN  */
/*##########*/
function logg_inn()
{
	document.LOGIN.Submit1.disabled=true;
	var sMeld;
	sMeld = "";
	if (document.LOGIN.user.value == "")
	{sMeld = sMeld + "- Brukernavn må fylles ut.\n";}
	if (document.LOGIN.password.value == "")
	{sMeld = sMeld + "- Passord må fylles ut.\n";}

	if (sMeld == "")
	{
		document.LOGIN.CMD.value="LOGIN";
		document.LOGIN.submit();
	}
	else
	{
		alert(sMeld);
		document.LOGIN.Submit1.disabled=false;
	}
}

function getPassword()
{
	// disable button
	document.FORGOT_PASSWORD.Submit2.disabled = true;

	var sMeld;
	sMeld = "";
	if (document.FORGOT_PASSWORD.email.value == "")
	{sMeld = sMeld + "- E-post må fylles ut.\n";}

	if (sMeld == "")
	{
		document.FORGOT_PASSWORD.CMD.value="GETPASSWORD";
		document.FORGOT_PASSWORD.submit();
	}
	else
	{
		alert(sMeld);
		// button
		document.FORGOT_PASSWORD.Submit2.disabled = false;
	}
}
function viewForgotPassword()
{
	document.getElementById("div_login_box").style.display = "none";
	document.getElementById("div_forgotpassword_box").style.display = "block";
}
/*   END LOGIN  */


/*##########*/
/*   OTHER  */
/*##########*/

/* new on mouse over function */
function over (obj){
	obj.className=obj.className+'_over';
}

/* new on mouse out function */
function out (obj){
	var str=obj.className;
	var pos=str.indexOf("_over")
	obj.className=str.substr(0,pos);
}

// Function that executes function inside input string when enter is pressed.
function doKey(sFunc) {
	if (document.all) {
		whichASC = event.keyCode;
		if(whichASC==13){
			eval(sFunc);
		}       
	}
}

//Newsletter signup:
function submit_newsletter(){
	if (!isValidEmail(document.APP_NEWSLETTER.EMAIL.value)) {
        alert('Vennligst fyll inn en gyldig epost adresse.');
    } else {
		document.APP_NEWSLETTER.submit();
    }
}

function signoff_single_letter(){
	if (!isValidEmail(document.APP_NEWSLETTER.EMAIL.value)) {
        alert('Vennligst fyll inn en gyldig epost adresse.');
    } else {
		document.APP_NEWSLETTER.CMD.value = 'SIGNOFF_SINGLE';
		document.APP_NEWSLETTER.submit();
    }
}

function isValidEmail(str) {
   return (str.indexOf(".") >= 1) && (str.indexOf("@") > 0);
}

function submit_multi_newsletter(){
    var err = '';
    var checked = false;

    if (!isValidEmail(document.APP_NEWSLETTER.EMAIL.value)) {
        err = 'Vennligst fyll inn en gyldig epost adresse.\n';
    }

    for (i = 0; i <= document.APP_NEWSLETTER.NEWSLETTER_ID.length - 1; i++) {
    	if (document.APP_NEWSLETTER.NEWSLETTER_ID[i].checked == true) {
            checked = true;
        }
    }
    if(checked == false){
        err = err + 'Ingen nyhetsbrev er valgt.';
    }
    
    if(err != ''){
        alert(err);
        return false;
    }

    document.APP_NEWSLETTER.submit();
    
    return;
    
}

function signoff_multi_letter(){
    var err = '';
    var checked = false;

    if (!isValidEmail(document.APP_NEWSLETTER.EMAIL.value)) {
        err = 'Vennligst fyll inn en gyldig epost adresse.\n';
    }

    for (i = 0; i <= document.APP_NEWSLETTER.NEWSLETTER_ID.length - 1; i++) {
    	if (document.APP_NEWSLETTER.NEWSLETTER_ID[i].checked == true) {
            checked = true;
        }
    }
    if(checked == false){
        err = err + 'Ingen nyhetsbrev er valgt.';
    }
    
    if(err != ''){
        alert(err);
        return false;
    }

    document.APP_NEWSLETTER.CMD.value = 'SIGNOFF_MULTI';
    document.APP_NEWSLETTER.submit();
    
    return;
}