function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'Bachelor of Computer Application (BCA - Specialization)' )
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='Artificial Intelligence in collaboration with Futurense Technologies'>Artificial Intelligence in collaboration with Futurense Technologies</option>\
<option value='Cloud Technology and Information Security integrated with Certification in CompTIA Cloud Essential / CompTIA Security+'>Cloud Technology and Information Security integrated with Certification in CompTIA Cloud Essential / CompTIA Security+</option>\
<option value='Cybersecurity program in collaboration with EC-Council'>Cybersecurity program in collaboration with EC-Council</option>\
<option value='Data Analytics'>Data Analytics</option>\
<option value='Internet of Things integrated with Certification in IoT Fundamentals - Connecting Things from Cisco'>Internet of Things integrated with Certification in IoT Fundamentals - Connecting Things from Cisco</option>\
<option value='Mobile Application and Information Security integrated with Certification in CompTIA Security+ / Apple iOS Application Development with Swift'>Mobile Application and Information Security integrated with Certification in CompTIA Security+ / Apple iOS Application Development with Swift</option>\
<option value='Mobile Application and Cloud Technology integrated with Certification in CompTIA Cloud Essential / Apple iOS Application Development with Swift'>Mobile Application and Cloud Technology integrated with Certification in CompTIA Cloud Essential / Apple iOS Application Development with Swift</option>\
</select>";
		}
 
 else if (typevalue == 'Bachelor of Computer Application (BCA-Electives)')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='Bachelor of Computer Application (BCA-Electives) integrated with Certification in CompTIA Server+'>Bachelor of Computer Application (BCA-Electives) integrated with Certification in CompTIA Server+</option>\
</select>";
		}

		else if (typevalue == 'Doctoral')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='PhD (Law)'>PhD (Law) </option>\
</select>";
		}


		else if (typevalue == 'Management')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='Management1' >B Arch</option>\
			<option value='Management2' >B Design - Interior</option>\
			<option value='Management3' >BLAD-Landscape</option>\
			<option value='Management4' >PhD</option>\
			<option value='Management5' >Education/Management</option>\
			<option value='Management6' >Sciences/Engineering</option>\
</select>";
		}

		else if (typevalue == 'School Of Engineering And Technology')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='BCA' >BCA</option>\
<option value='B.Tech' >B.Tech</option>\
<option value='MSc-Business Analytics' >MSc-Business Analytics</option>\
<option value='M.Tech' >M.Tech</option>\
</select>";
		}
 
 
 
	}