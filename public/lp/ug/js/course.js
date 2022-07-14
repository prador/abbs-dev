function select_course_func()
{
		var select = document.getElementById("courseid");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'Business' )
		{
			document.getElementById("programid").innerHTML="<select name='program' id='programid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Program</option><option value='Business1'>Bachelor in Business Administration</option>\
			<option value='Business2'>BBA Avitation Management</option>\
</select>";
		}
 
 else if (typevalue == 'LifeSciences')
		{
			document.getElementById("programid").innerHTML="<select name='program' id='programid' class='form-control validate[required]'><option value='' selected='selected'>Select Program</option><option value='LifeSciences1'>B.Sc BioTechnology</option>\
</select>";
		}

		else if (typevalue == 'Commerce')
		{
			document.getElementById("programid").innerHTML="<select name='program' id='programid' class='form-control validate[required]'><option value='' selected='selected'>Select Program</option><option value='Commerce1'>B.Com</option>\
			<option value='Commerce2'>B. Com Supply Chain Management</option>\
</select>";
		}


		else if (typevalue == 'LiberalArts')
		{
			document.getElementById("programid").innerHTML="<select name='program' id='programid' class='form-control validate[required]'><option value='' selected='selected'>Select Program</option><option value='LiberalArts1'>BA Psychology</option>\
			<option value='LiberalArts2'>BA Journalism</option>\
			<option value='LiberalArts3'>BA Economics</option>\
</select>";
		}

		else if (typevalue == 'Technology')
		{
			document.getElementById("programid").innerHTML="<select name='program' id='programid' class='form-control validate[required]'><option value='' selected='selected'>Select Program</option><option value='Technology1'>BCA</option>\
</select>";
		}
 
 
 
	}