function badBrowser(){
	if($.browser.msie && parseInt($.browser.version) <= 6){ 
		if (window.XMLHttpRequest)
		{
			return false;
		} else 
		{
			return true;
		}
		
	}
	
	return false;
}

function getBadBrowser(c_name)
{
	if (document.cookie.length>0)
	{
	c_start=document.cookie.indexOf(c_name + "=");
	if (c_start!=-1)
		{ 
		c_start=c_start + c_name.length+1; 
		c_end=document.cookie.indexOf(";",c_start);
		if (c_end==-1) c_end=document.cookie.length;
		return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}	

function setBadBrowser(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

if(badBrowser() && getBadBrowser('browserWarning') != 'seen' ){
	$(function(){
		$("<div id='browserWarning'>Du bruker en gammel nettleser. Vennligst bytt til <a href='http://www.mozilla-europe.org/no/'>FireFox</a>, <a href='http://www.opera.com/browser/'>Opera</a> eller <a href='http://www.microsoft.com/norge/windows/downloads/ie/getitnow.mspx'>Internet Explorer 8</a>. &nbsp;&nbsp;&nbsp;[<a href='#' id='warningClose'>Lukk</a>] </div> ")
			.css({
				backgroundColor: '#fcfdde',
				'width': '100%',
				'border-top': 'solid 1px #000',
				'border-bottom': 'solid 1px #000',
				'text-align': 'center',
				padding:'5px 0px 5px 0px'
			})
			.prependTo("body");
		
		$('#warningClose').click(function(){
			setBadBrowser('browserWarning','seen');
			$('#browserWarning').slideUp('slow');
			return false;
		});
	});	
}
