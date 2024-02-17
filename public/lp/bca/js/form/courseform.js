function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'Bachelor of Technology' )
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='Aerospace Engineering'>Aerospace Engineering</option>\
<option value='Aeronautical Engineering'>Aeronautical Engineering</option>\
<option value='Mechanical Engineering - Mechatronics'>Mechanical Engineering - Mechatronics</option>\
<option value='Mechanical Engineering - 3D printing'>Mechanical Engineering - 3D printing</option>\
<option value='Civil Engineering'>Civil Engineering</option>\
<option value='Computer Science and Engineering'>Computer Science and Engineering</option>\
<option value='Computer Science & Engineering (Artificial Intelligence)'>Computer Science & Engineering (Artificial Intelligence)</option>\
<option value='Computer Science & Engineering (Internet of Things)'>Computer Science & Engineering (Internet of Things)</option>\
<option value='Computer Science & Engineering (Cyber Security)'>Computer Science & Engineering (Cyber Security)</option>\
<option value='Computer Engineering (Software Engineering)'>Computer Engineering (Software Engineering)</option>\
<option value='Information Science & Engineering'>Information Science & Engineering</option>\
<option value='Computer Science & Engineering - Cloud Technology and Mobile Application'>Computer Science & Engineering - Cloud Technology and Mobile Application</option>\
<option value='Computer Science & Engineering - Cloud Technology and Information Security'>Computer Science & Engineering - Cloud Technology and Information Security</option>\
<option value='Computer Science & Engineering - Artificial Intelligence and Machine Learning'>Computer Science & Engineering - Artificial Intelligence and Machine Learning</option>\
<option value='Electrical & Electronics Engineering - Electric Mobility & Smart Systems'>Electrical & Electronics Engineering - Electric Mobility & Smart Systems</option>\
<option value='Electrical & Electronics Engineering - IoT Energy Management'>Electrical & Electronics Engineering - IoT Energy Management</option>\
<option value='Electronics & Communication Engineering - Embedded systems and Industrial IOT'>Electronics & Communication Engineering - Embedded systems and Industrial IOT</option>\
<option value='Electronics & Communication Engineering - Cellular Technology'>Electronics & Communication Engineering - Cellular Technology</option>\
</select>";
		}
 
 else if (typevalue == 'Bachelor of Technology (Honours)')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='Computer Science & Engineering (Data Science)'>Computer Science & Engineering (Data Science)</option>\
			</select>";
		}

		else if (typevalue == 'Bachelor of Technology (Lateral)')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='Aerospace Engineering'>Aerospace Engineering</option>\
<option value='Aeronautical Engineering'>Aeronautical Engineering</option>\
<option value='Computer Science and Engineering'>Computer Science and Engineering</option>\
<option value='Computer Engineering (Cloud Technology and Mobile Application)'>Computer Engineering (Cloud Technology and Mobile Application)</option>\
<option value='Computer Technology (Cloud Technology and Information Security)'>Computer Technology (Cloud Technology and Information Security)</option>\
<option value='Computer Science and System Engineering (Internet of Things)'>Computer Science and System Engineering (Internet of Things)</option>\
<option value='Computer Science and Technology (Artificial Intelligence)'>Computer Science and Technology (Artificial Intelligence)</option>\
<option value='Software Engineering'>Software Engineering</option>\
<option value='Information Science and Engineering'>Information Science and Engineering</option>\
<option value='Civil Engineering'>Civil Engineering</option>\
<option value='Mechanical Engineering - Mechatronics'>Mechanical Engineering - Mechatronics</option>\
<option value='Electronics & Communication Engineering - Embedded Systems and Industrial IOT'>Electronics & Communication Engineering - Embedded Systems and Industrial IOT</option>\
<option value='Electrical & Electronics Engineering - Electric Mobility and Smart Systems'>Electrical & Electronics Engineering - Electric Mobility and Smart Systems</option>\
<option value='Computer Science (Data Science)'>Computer Science (Data Science)</option>\
<option value='Computer Science and Engineering (Cyber Security)'>Computer Science and Engineering (Cyber Security)</option>\
<option value='Computer Science and Engineering - Artificial Intelligence and Machine Learning'>Computer Science and Engineering - Artificial Intelligence and Machine Learning</option>\
<option value='Mechanical Engineering - 3D Printing'>Mechanical Engineering - 3D Printing</option>\
<option value='Electronics & Communication Engineering - Cellular Technology'>Electronics & Communication Engineering - Cellular Technology</option>\
<option value='Electrical & Electronics Engineering - IOT Energy Management'>Electrical & Electronics Engineering - IOT Energy Management</option>\
</select>";
		}
}