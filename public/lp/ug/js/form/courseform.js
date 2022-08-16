function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'Diploma Programs' )
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Program*</option>\
			<option value='DMLT- Diploma in Medical Laboratory Technology'>DMLT- Diploma in Medical Laboratory Technology</option>\
			<option value='DOT - Diploma in Ophthalmic Techniques (Optometry)'>DOT - Diploma in Ophthalmic Techniques (Optometry)</option>\
</select>";
		}
 
 else if (typevalue == 'Under Graduate Programs')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Program*</option>\
			<option value='B.Sc. Nursing'>B.Sc. Nursing</option>\
			<option value='B. Com Professional (CMA)'>B. Com Professional (CMA)</option>\
			<option value='BBA-Bachelor of Business Administration'>BBA-Bachelor of Business Administration</option>\
			<option value='BBA-Aviation Management'>BBA-Aviation Management</option>\
			<option value='BCA-Bachelor of Computer Applications'>BCA-Bachelor of Computer Applications</option>\
			<option value='B-Com-General'>B-Com-General</option>\
			<option value='B-Com-Logistic and Supply Chain'>B-Com-Logistic and Supply Chain</option>\
			<option value='BSc(Biotechnology-Biochemistry-Microbiology)'>BSc(Biotechnology-Biochemistry-Microbiology)</option>\
			<option value='B.Sc(Biotechnology-Biochemistry-Genetics)'>B.Sc(Biotechnology-Biochemistry-Genetics)</option>\
			<option value='BA(Tourism/History/Journalism)'>BA(Tourism/History/Journalism)</option>\
			<option value='BBA, L.L.B (5 Years Integrated)'>BBA, L.L.B (5 Years Integrated)</option>\
			<option value='BA(Psychology/Sociology/Political Science)'>BA(Psychology/Sociology/Political Science)</option>\
			<option value='BA(Economics/Statistics/Marketing)'>BA(Economics/Statistics/Marketing)</option>\
</select>";
		}

 
	}