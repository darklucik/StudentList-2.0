// Inputs
let inpName = document.querySelector('.name');
let inpSurname = document.querySelector('.surname');
let inpAge = document.querySelector('.age');

//Block_list
let studentList = document.querySelector ('.info_wrapper');

//Buttons
let btnAdd = document.querySelector('.add');
let btnClear = document.querySelector('.clear');

btnAdd.addEventListener('click', addStudent);

let array = [];

function addStudent(){
	let inpNameValue = inpName.value;
	let inpSurnameValue = inpSurname.value;
	let inpAgeValue = inpAge.value;

	let resultList = 
	`<div class="info_card">
		${inpNameValue} ${inpSurnameValue} ${inpAgeValue}
	</div>`
	array.push(resultList);
	
	let list = "";

	array.forEach((e) => {
		list = list + e
	});

	studentList.innerHTML = list;

	inpName.value = "";
	inpSurname.value = "";
	inpAge.value = "";

	if(inpAgeValue =="" && inpNameValue == "" && inpSurnameValue == "") {
		alert('Заполните Поля');
		studentList.innerHTML = "";
		array = [];
	}
}

btnClear.addEventListener('click', clearBlock);

function clearBlock(){
	studentList.innerHTML = "";
	array = [];
}


