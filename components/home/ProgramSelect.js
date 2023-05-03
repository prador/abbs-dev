import * as React from "react";

const ProgramSelect = (section) => {
/** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
const [selected, setSelected] = React.useState("");
const [selectedProg, setSelectedProg] = React.useState("");

/** Function that will set different values to state variable
* based on which dropdown is selected
*/

/** Different arrays for different dropdowns */
const group1 = [
	{"course":"BBA","link":"/programs/business/bba"},
	{"course":"BBA Aviation Management","link":"/programs/business/bba-aviation-management"},
	{"course":"B.Com","link":"/programs/commerce/b-com"},
	{"course":"B.Com Logistics & Supply Chain","link":"/programs/commerce/b-com-supply-chain-management"},
	{"course":"BCA","link":"/programs/information-technology/bca"},
	{"course":"B.Sc Biotechnology","link":"/programs/life-sciences/b-sc"},
	{"course":"Liberal Arts","link":"/programs/liberal-arts/liberal-arts-programs"},
];

const group2 = [
	{"course":"MBA","link":"/programs/business/best-mba-colleges-in-bangalore"},
];
const group3 = [
	{"course":"MBA","link":"/programs/business/best-mba-colleges-in-bangalore"},
	{"course":"M.Com","link":"/programs/commerce/m-com"}
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
}

if (type) {
	options = type.map((el) => <option key={el.index} value={el.link}>{el.course}</option>);
}

const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
	
};
const changeSelectProgramHandler = (event) => {
	setSelectedProg(event.target.value);
}
React.useEffect(() => {
    if (type == group1) {
		setSelectedProg("/programs/business/bba");
	} else if (type == group2 || type == group3) {
		setSelectedProg("/programs/business/best-mba-colleges-in-bangalore");
	} else {
		setSelectedProg("#");
	}
  }, [selected]);
// console.log(section.att.show_program_select)
return (
	<>
	{section.att.show_program_select ? 
	<div className="content news-events-wrapper">
		
      {/* <div className="w-layout-grid contain-block"> */}
      <section className='program-select-section'>
	<div
	style={{
		padding: "16px",
		margin: "16px",
		textAlign: "center"
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
			<p>I am a student of</p>
			<select id="groups" onChange={changeSelectOptionHandler}>
				<option value="group0"></option>
				<option value="group1">Class 10</option>
				<option value="group1">Class 11 / 12</option>
				<option value="group1">1st / 2nd PUC</option>
				<option value="group2">B.E</option>
				<option value="group2">B.Tech</option>
				<option value="group3">B.Com</option>
				<option value="group2">BBA</option>
				<option value="group2">BBA Aviation</option>
				<option value="group2">BCA</option>
				<option value="group2">BSc.</option>
				<option value="group2">B.Arch</option>
				<option value="group2">L.Lb</option>
				<option value="group2">B.A</option>
			</select>
			<p>interested in</p>
			<select id="selectedProgram" onChange={changeSelectProgramHandler} >
				{
				/** This is where we have used our options variable */
				options
				}
			</select>
			<a href={selectedProg} className="btn btn-outline">Search</a>
		</div>
		</div>
	</form>
	</div>
	</section>
	</div>
	: null }
	</>
);
};

export default ProgramSelect;
