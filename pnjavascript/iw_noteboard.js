function noteboardIsShared(sid){
	var public;
	if ($('public').checked) {
		public = 1;
	}else{
		public = 0;
	}
	var pars = "module=iw_noteboard&func=createSharedURL&public=" + public;
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: noteboardIsShared_response,
		onFailure: noteboardIsShared_failure
	});
}

function noteboardIsShared_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);
	Element.update('shareOptions', json.content).innerHTML;
}

function noteboardIsShared_failure(){

}

function regenSharedURL(text){
	resposta=confirm(text);
	if(resposta){
        	showsharedURLinfo(changingsharedURL);
		var pars = "module=iw_noteboard&func=regenSharedURL";
		var myAjax = new Ajax.Request("ajax.php", 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: regenSharedURL_response,
			onFailure: regenSharedURL_failure
		});
	}
}

function regenSharedURL_response(req){
	showsharedURLinfo(changingsharedURL);
	var json = pndejsonize(req.responseText);
	Element.update('sharedURL', json.content).innerHTML;
}

function regenSharedURL_failure(){

}

function showsharedURLinfo(infotext)
{
	var info = 'sharedURLinfo';
	if(!Element.hasClassName(info, 'pn-hide')) {
		Element.update(info, '&nbsp;');
		Element.addClassName(info, 'pn-hide');
	} else {
		Element.update(info, infotext);
		Element.removeClassName(info, 'pn-hide');
	}
}  


function deltopic(tid,text,authid){
	resposta=confirm(text);
	if(resposta){
        	showtopicinfo(tid, deletingtopic);
		var pars = "module=iw_noteboard&func=deletetopic&tid=" + tid + "&authid=" + authid;
		var myAjax = new Ajax.Request("ajax.php", 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: deltopic_response,
			onFailure: deltopic_failure
		});
	}
}

function deltopic_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);

	$('topic_' + json.tid).toggle()
}

function deltopic_failure(req){

}

function delShared(pid,text,authid){
	resposta=confirm(text);
	if(resposta){
        	showsharedinfo(pid, deletingshared);
		var pars = "module=iw_noteboard&func=deleteShared&pid=" + pid + "&authid=" + authid;
		var myAjax = new Ajax.Request("ajax.php", 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: delShared_response,
			onFailure: delShared_failure
		});
	}
}

function delShared_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);

	$('shared_' + json.pid).toggle()
}

function delShared_failure(){

}

function send(text1){
	var error=false;
	f=document.conf;
	if(!IsNumeric(f.c.value) || f.c.value==''){
		alert(text1);
		error=true;
	}
			
	if(!error){document.conf.submit();}
}

function IsNumeric(strString){
	//  check for valid numeric strings	
	var strValidChars = "0123456789.-";
	var strChar;
	var blnResult = true;

	if (strString.length == 0) return false;

	//  test strString consists of valid characters listed above
	for (i = 0; i < strString.length && blnResult == true; i++)
	{
		strChar = strString.charAt(i);
		if (strValidChars.indexOf(strChar) == -1)
		{
			blnResult = false;
		}
	}
	return blnResult;
}

function marca(nid){
        show_info(nid, addingflag);
	var pars = "module=iw_noteboard&func=marca&nid=" + nid;
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: marca_response,
		onFailure: marca_failure
	});

}

function marca_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);

	$('marca_' + json.nid).toggle()
	$('nomarca_' + json.nid).toggle()
	$('flag_' + json.nid).toggle()
	show_info(json.nid, addingflag);
	reloadFlaggedBlock();
}

function marca_failure(){

}

function hide(nid,text){
	resposta=confirm(text);
	if(resposta){
        	show_info(nid, hidingnote);
		var pars = "module=iw_noteboard&func=hide&nid=" + nid;
		var myAjax = new Ajax.Request("ajax.php", 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: hide_response,
			onFailure: hide_failure
		});
	}
}

function hide_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);

	$('note_' + json.nid).toggle()
}

function hide_failure(){

}

function save(nid,text){
	resposta=confirm(text);
	if(resposta){
        	show_info(nid, savingnote);
		var pars = "module=iw_noteboard&func=save&nid=" + nid;
		var myAjax = new Ajax.Request("ajax.php", 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: save_response,
			onFailure: save_failure
		});
	}
}

function save_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);

	$('note_' + json.nid).toggle()
}

function save_failure(){

}

function del(nid,text){
	resposta=confirm(text);
	if(resposta){
        	show_info(nid, deletingnote);
		var pars = "module=iw_noteboard&func=delete&nid=" + nid;
		var myAjax = new Ajax.Request("ajax.php", 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: del_response,
			onFailure: del_failure
		});
	}
}

function del_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);

	$('note_' + json.nid).toggle()
}

function del_failure(req){

}

/**
 * Use to temporarily show an infotext instead of the permission. Must be
 * called twice: 
 * #1: Show the infotext
 * #2: restore normal display
 * If both parameters are missing all infotext fields will be restored to
 * normal display
 *
 *@params nid the note id;
 *@params infotext the text to show;
 *@return none;
 *@author adapted from Frank Schummertz
 */
function show_info(nid, infotext)
{
    if(nid) {
        var info = 'noteinfo_' + nid;
        if(!Element.hasClassName(info, 'pn-hide')) {
            Element.update(info, '&nbsp;');
            Element.addClassName(info, 'pn-hide');
        } else {
            Element.update(info, infotext);
            Element.removeClassName(info, 'pn-hide');
        }
    } else {
        $A(document.getElementsByClassName('noteinfo')).each(function(info){
            Element.update(info, '&nbsp;');
            Element.addClassName(info, 'pn-hide');
        });
    }
}  

/**
 * Use to temporarily show an infotext instead of the permission. Must be
 * called twice: 
 * #1: Show the infotext
 * #2: restore normal display
 * If both parameters are missing all infotext fields will be restored to
 * normal display
 *
 *@params nid the note id;
 *@params infotext the text to show;
 *@return none;
 *@author adapted from Frank Schummertz
 */
function showtopicinfo(tid, infotext)
{
    if(tid) {
        var info = 'topicinfo_' + tid;
        if(!Element.hasClassName(info, 'pn-hide')) {
            Element.update(info, '&nbsp;');
            Element.addClassName(info, 'pn-hide');
        } else {
            Element.update(info, infotext);
            Element.removeClassName(info, 'pn-hide');
        }
    } else {
        $A(document.getElementsByClassName('topicinfo')).each(function(info){
            Element.update(info, '&nbsp;');
            Element.addClassName(info, 'pn-hide');
        });
    }
}  

/**
 * Use to temporarily show an infotext instead of the permission. Must be
 * called twice: 
 * #1: Show the infotext
 * #2: restore normal display
 * If both parameters are missing all infotext fields will be restored to
 * normal display
 *
 *@params nid the note id;
 *@params infotext the text to show;
 *@return none;
 *@author adapted from Frank Schummertz
 */
function showsharedinfo(tid, infotext)
{
    if(tid) {
        var info = 'sharedinfo_' + tid;
        if(!Element.hasClassName(info, 'pn-hide')) {
            Element.update(info, '&nbsp;');
            Element.addClassName(info, 'pn-hide');
        } else {
            Element.update(info, infotext);
            Element.removeClassName(info, 'pn-hide');
        }
    } else {
        $A(document.getElementsByClassName('sharedinfo')).each(function(info){
            Element.update(info, '&nbsp;');
            Element.addClassName(info, 'pn-hide');
        });
    }
} 

