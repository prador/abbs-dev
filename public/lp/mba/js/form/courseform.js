function select_courseform_func() {
  var select = document.getElementById("courseidd");
  var typevalue = select.options[select.selectedIndex].value;

  if (typevalue == "Under Graduate Programs") {
    document.getElementById("specializationid").innerHTML =
      "<select name='specialization' id='specializationid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Course*</option><option value='B.Com. Logistics and Supply Chain Management'>B.Com. Logistics and Supply Chain Management</option>\
<option value='BCA'>BCA</option>\
<option value='B.Sc. Biotechnology/Biochemistry/ Genetics'>B.Sc. Biotechnology/Biochemistry/ Genetics</option>\
<option value='B.Sc. Biotechnology/Biochemistry/Microbiology'>B.Sc. Biotechnology/Biochemistry/Microbiology</option>\
<option value='BA Journalism/Tourism/History'>BA Journalism/Tourism/History</option>\
<option value='BA Psychology/Sociology/Political Science'>BA Psychology/Sociology/Political Science</option>\
<option value='BBA, LL.B (5 years, integrated)'>BBA, LL.B (5 years, integrated)</option>\
<option value='Bachelor of Physiotherapy - BPT'>Bachelor of Physiotherapy - BPT</option>\
<option value='Bachelor in Medical Lab technology - B.Sc. MLT'>Bachelor in Medical Lab technology - B.Sc. MLT</option>\
<option value='Bachelor in Medical Imaging Technology - B.Sc. MIT'>Bachelor in Medical Imaging Technology - B.Sc. MIT</option>\
<option value='Bachelor in Nursing - B.Sc. Nursing'>Bachelor in Nursing - B.Sc. Nursing</option>\
<option value='BBA(Psychology/Sociology/Political Science)'>BA(Psychology/Sociology/Political Science)</option>\
<option value='BA Economics/Statistics/Marketing'>BA Economics/Statistics/Marketing</option>\
<option value='B.Com'>B.Com</option>\
<option value='General Nursing and Midwifery - GNM'>General Nursing and Midwifery - GNM</option>\
</select>";


  } else if (typevalue == "Post Graduate Programs") {
    document.getElementById("specializationid").innerHTML =
      "<select name='specialization' id='specializationid' class='form-control validate[required]'><option value='' selected='selected'>Select Specialization*</option><option value='MBA'>MBA</option>\
      <option value='MBA-Global'>MBA-Global</option>\
      <option value='MBA-Business Analytics'>MBA-Business Analytics</option>\
			</select>";
  } else if (typevalue == "Diploma Programs") {
    document.getElementById("specializationid").innerHTML =
      "<select name='specialization' id='specializationid' class='form-control validate[required]'><option value='' selected='selected'>Select Course*</option><option value='Diploma in Medical Technology'>Diploma in Medical Technology</option>\
      <option value='Diploma in X-Ray Technology'>Diploma in X-Ray Technology</option>\
      <option value='Diploma in Ophthalmic Technology'>Diploma in Ophthalmic Technology</option>\
			</select>";
  } else if (typevalue == "Summer School") {
    document.getElementById("specializationid").innerHTML =
      "<select name='specialization' id='specializationid' class='form-control validate[required]'><option value='' selected='selected'>Select Course*</option><option value='Summer School'>Summer School</option>\
			</select>";
  }
}
