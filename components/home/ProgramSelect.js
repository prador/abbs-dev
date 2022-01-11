import * as React from "react";

const ProgramSelect = () => {
/** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
const [selected, setSelected] = React.useState("");

/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
	console.log(event.target.value)
};

/** Different arrays for different dropdowns */
const group0 = [
	"1Searching Algorithm",
	"Sorting Algorithm",
	"Graph Algorithm",
];
const group1 = [
	{"course":"Undergraduate","link":"/"},
	{"course":"BBA","link":"/"},
	{"course":"B.Com","link":"/"},
	{"course":"BBA Aviation Management","link":"/"},
	{"course":"B.Com Logistics &amp; Supply Chain","link":"/"},
	{"course":"B.Sc Biotechnology","link":"/"},
	{"course":"BA Journalism","link":"/"},
	{"course":"BA Psychology","link":"/"},
	{"course":"BA Economics","link":"/"},
	{"course":"BCA","link":"/"},
];
const group2 = [
	{"course":"Undergraduate","link":"/"},
	{"course":"BBA","link":"/"},
	{"course":"B.Com","link":"/"},
	{"course":"BBA Aviation Management","link":"/"},
	{"course":"B.Com Logistics &amp; Supply Chain","link":"/"},
	{"course":"MBA","link":"/"},
	{"course":"PGDM","link":"/"},
	{"course":"M.Com","link":"/"}
];
const group3 = [
	{"course":"Undergraduate","link":"/"},
	{"course":"BBA","link":"/"},
	{"course":"B.Com","link":"/"},
	{"course":"BBA Aviation Management","link":"/"},
	{"course":"BA Journalism","link":"/"},
	{"course":"BA Psychology","link":"/"},
	{"course":"BA Economics","link":"/"},
	{"course":"BCA","link":"/"},
];
const group4 = [
	{"course":"Undergraduate","link":"/"},
	{"course":"BBA","link":"/"},
	{"course":"B.Com","link":"/"},
	{"course":"BBA Aviation Management","link":"/"},
	{"course":"B.Com Logistics &amp; Supply Chain","link":"/"},
	{"course":"BA Journalism","link":"/"},
	{"course":"BA Psychology","link":"/"},
	{"course":"BA Economics","link":"/"},
	{"course":"BCA","link":"/"},
];
const group5 = [
	{"course":"Undergraduate","link":"/"},
	{"course":"B.Sc Biotechnology","link":"/"},
	{"course":"B.Sc Genetics","link":"/"},
];
const group6 = [
	{"course":"Masters","link":"/"},
	{"course":"1 Year PG Diploma in management","link":"/"},
	{"course":"MBA","link":"/"},
	{"course":"PGDM","link":"/"},
];
const group7 = [
	{"course":"Masters","link":"/"},
	{"course":"1 Year PG Diploma in management","link":"/"},
	{"course":"MBA","link":"/"},
	{"course":"PGDM","link":"/"},
	{"course":"M.Com","link":"/"},
];
const group8 = [
	{"course":"Masters","link":"/"},
	{"course":"MBA","link":"/"},
	{"course":"PGDM","link":"/"},
];

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
if (selected === "group1") {
	type = group1;
} else if (selected === "group2") {
	type = group2;
} else if (selected === "group3") {
	type = group3;
} else if (selected === "group4") {
	type = group4;
} else if (selected === "group5") {
	type = group5;
} else if (selected === "group6") {
	type = group6;
} else if (selected === "group7") {
	type = group7;
} else if (selected === "group8") {
	type = group8;
}
// switch (selected) {
// 	case "group1":
// 		 type = group1;
// 	case "group2":
// 		return type = group2;
// 	case "group3":
// 		 type = group3;
// 	case "group4":
// 		 type = group4;
// 	case "group5":
// 		 type = group5;
// 	case "group6":
// 		 type = group6;
// 	case "group7":
// 		 type = group7;
// 	case "group8":
// 		 type = group8;
// 	case "group0":
// 		 type = group1;
// }

/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((el) => <option key={el} value={el.link}>{el.course}</option>);
}
return (
	<div
	style={{
		padding: "16px",
		margin: "16px",
	}}
	>
	<form>
		<div>
		{/** Bind changeSelectOptionHandler to onChange method of select.
		* This method will trigger every time different
		* option is selected.
		*/}
		<h2>Start your journey to a new career</h2>
		<div className="prog-select-row">
			<p>I am </p>
			<select id="groups" class="mjt_drpdwn" onChange={changeSelectOptionHandler}>
				<option value="group0"></option>
				<option value="group1">Class 11th Student</option>
				<option value="group1">Class 12th Student</option>
				<option value="group2">Commerce student</option>
				<option value="group3">Arts student</option>
				<option value="group4">Science Student</option>
				<option value="group5">Biology Student</option>
				<option value="group6">BBA Graduate</option>
				<option value="group7">B.Com Graduate</option>
				<option value="group6">BA Graduate</option>
				<option value="group6">Law Graduate</option>
				<option value="group8">B.Arch Graduate</option>
				<option value="group8">Paramedical graduate</option>
				<option value="group8">Design Graduate</option>
				<option value="group7">B.E/B.Tech</option>
				<option value="group7">Working professional</option>
			</select>
			<p>interested in</p>
			<select>
				{
				/** This is where we have used our options variable */
				options
				}
			</select>
			{/* <select id="sub_groups" class="mjt_drpdwn">
			<option value="/programs/" data-group="group0">_________________</option>
			<option value="/programs/" data-group="group1">Undergraduate</option>
			<option value="/programs/bba-colleges-in-bangalore/" data-group="group1">BBA</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group1">B.Com</option>
			<option value="/programs/bba-aviation-colleges-in-bangalore/" data-group="group1">BBA Aviation Management</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group1">B.Com Logistics &amp; Supply Chain</option>
			<option value="/programs/b-sc-biotechnology/" data-group="group1">B.Sc Biotechnology</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group1">BA Journalism</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group1">BA Tourism</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group1">BA Psychology</option>
			<option value="/programs/bca-colleges-in-bangalore/" data-group="group1">BCA</option>
			<option value="/programs/b-sc-biotechnology/" data-group="group1">BSc. Genetics</option>

			<option value="/programs/" data-group="group2">Undergraduate</option>
			<option value="/programs/bba-colleges-in-bangalore/" data-group="group2">BBA</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group2">B.Com</option>
			<option value="/programs/bba-aviation-colleges-in-bangalore/" data-group="group2">BBA Aviation Management</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group2">B.Com Logistics &amp; Supply Chain</option>
			<option value="/programs/mba/" data-group="group2">MBA</option>
			<option value="/programs/mba/" data-group="group2">PGDM</option>
			<option value="/programs/m-com-2/" data-group="group2">M.Com</option>

			<option value="/programs/" data-group="group3">Undergraduate</option>
			<option value="/programs/bba-colleges-in-bangalore/" data-group="group3">BBA</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group3">B.Com</option>
			<option value="/programs/bba-aviation-colleges-in-bangalore/" data-group="group3">BBA Aviation Management</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group3">BA Journalism</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group3">BA Tourism</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group3">BA Psychology</option>
			<option value="/programs/bca-colleges-in-bangalore/" data-group="group3">BCA</option>

			<option value="/programs/" data-group="group4">Undergraduate</option>
			<option value="/programs/bba-colleges-in-bangalore/" data-group="group4">BBA</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group4">B.Com</option>
			<option value="/programs/bba-aviation-colleges-in-bangalore/" data-group="group4">BBA Aviation Management</option>
			<option value="/programs/bachelor-of-commerce/" data-group="group4">B.Com Logistics &amp; Supply Chain</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group4">BA Journalism</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group4">BA Tourism</option>
			<option value="/programs/ba-journalism-colleges-in-bangalore/" data-group="group4">BA Psychology</option>
			<option value="/programs/bca-colleges-in-bangalore/" data-group="group4">BCA</option>

			<option value="/programs/" data-group="group5">Undergraduate</option>
			<option value="/programs/b-sc-biotechnology/" data-group="group5">B.Sc Biotechnology</option>
			<option value="/programs/b-sc-biotechnology/" data-group="group5">BSc. Genetics</option>

			<option value="/programs/" data-group="group6">Masters</option>
			<option value="/programs/mba/" data-group="group6">1 Year PG Diploma in management</option>
			<option value="/programs/mba/" data-group="group6">MBA</option>
			<option value="/programs/mba/" data-group="group6">PGDM</option>

			<option value="/programs/" data-group="group7">Masters</option>
			<option value="/programs/mba/" data-group="group7">1 Year PG Diploma in management</option>
			<option value="/programs/mba/" data-group="group7">MBA</option>
			<option value="/programs/mba/" data-group="group7">PGDM</option>
			<option value="/programs/m-com-2/" data-group="group7">M.Com</option>

			<option value="/programs/" data-group="group8">Masters</option>
			<option value="/programs/mba/" data-group="group8">MBA</option>
			<option value="/programs/mba/" data-group="group8">PGDM</option>
			</select> */}
			<button className="btn btn-outline">Search</button>
		</div>
		</div>
	</form>
	</div>
);
};

export default ProgramSelect;
