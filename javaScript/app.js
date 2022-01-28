/* Variables for Grabbers */

let billGrabber = document.getElementById("bill");
let billMessageGrabber = document.getElementById("billHiddenLabel");
let peopleMessageGrabber = document.getElementById("peopleHiddenLabel");
let tipSelectMessageGrabber = document.getElementById("tipSelectHiddenMessage");
let tipSelectGroupGrabber = document.getElementById("selectTip");
let amountOfPeopleGrabber = document.getElementById("numOfPeople");
let calcTipBtnGrabber = document.getElementById("btnCalc");
let fivePercentGrabber = document.getElementById("fivePercent");
let tenPercentGrabber = document.getElementById("tenPercent");
let fifteenPercentPercentGrabber = document.getElementById("fifteenPercent");
let twentyFivePercentGrabber = document.getElementById("twentyFivePercent");
let fiftyPercentGrabber = document.getElementById("fiftyPercent");
let customPercentGrabber = document.getElementById("customTip");
let tipResultAmountGrabber = document.getElementById("tipResultAmount");
let totalResultAmountGrabber = document.getElementById("totalResult");
let resetBtnGrabber = document.getElementById("resetBtn");
let buttonGroupTipGrabber = document.getElementById("buttonGroupTip");

let fiveFlag = false;
let tenFlag = false;
let fifteenFlag = false;
let twentyFiveFlag = false;
let fiftyFlag = false;
let customFlag = false;
let tipSelected = false;

let updateMoney = (tip, total) => {
	tipResultAmountGrabber.innerHTML = `$${tip}`;
	totalResultAmountGrabber.innerHTML = `$${total}`;
};
let calc = () => {
	console.log("Clicked");
	validateInputs();

	let bill = +billGrabber.value;
	let people = +amountOfPeopleGrabber.value;
	let custom = +customPercentGrabber.value;
	let tipAmountPerPerson = 0;
	let totalBillPerPerson = 0;

	if (fiveFlag === true) {
		let tip = bill * 0.05;
		tipAmountPerPerson = Number(tip / people).toFixed(1);
		totalBillPerPerson = Number((bill + tip) / people).toFixed(1);
		updateMoney(tipAmountPerPerson, totalBillPerPerson);
		console.log(
			`bill: ${bill} people: ${people} tipAmount: ${tipAmountPerPerson} total: ${totalBillPerPerson}`
		);
	} else if (tenFlag === true) {
		let tip = bill * 0.1;
		tipAmountPerPerson = Number(tip / people).toFixed(1);
		totalBillPerPerson = Number((bill + tip) / people).toFixed(1);
		updateMoney(tipAmountPerPerson, totalBillPerPerson);
		console.log(
			`bill: ${bill} people: ${people} tipAmount: ${tipAmountPerPerson} total: ${totalBillPerPerson}`
		);
	} else if (fifteenFlag === true) {
		let tip = bill * 0.15;
		tipAmountPerPerson = Number(tip / people).toFixed(1);
		totalBillPerPerson = Number((bill + tip) / people).toFixed(1);
		updateMoney(tipAmountPerPerson, totalBillPerPerson);
		console.log(
			`bill: ${bill} people: ${people} tipAmount: ${tipAmountPerPerson} total: ${totalBillPerPerson}`
		);
	} else if (twentyFiveFlag === true) {
		let tip = bill * 0.25;
		tipAmountPerPerson = Number(tip / people).toFixed(1);
		totalBillPerPerson = Number((bill + tip) / people).toFixed(1);
		updateMoney(tipAmountPerPerson, totalBillPerPerson);
		console.log(
			`bill: ${bill} people: ${people} tipAmount: ${tipAmountPerPerson} total: ${totalBillPerPerson}`
		);
	} else if (fiftyFlag === true) {
		let tip = bill * 0.5;
		tipAmountPerPerson = Number(tip / people).toFixed(1);
		totalBillPerPerson = Number((bill + tip) / people).toFixed(1);
		updateMoney(tipAmountPerPerson, totalBillPerPerson);
		console.log(
			`bill: ${bill} tip: ${tip} people: ${people} tipAmount: ${tipAmountPerPerson} total: ${totalBillPerPerson}`
		);
	} else if (customFlag === true) {
		let customNumber = customPercentGrabber.value / 100;
		let tip = bill * customNumber;
		tipAmountPerPerson = Number(tip / people).toFixed(1);
		totalBillPerPerson = Number((bill + tip) / people).toFixed(1);
		updateMoney(tipAmountPerPerson, totalBillPerPerson);
		console.log(
			`bill: ${bill} people: ${people} tipAmount: ${tipAmountPerPerson} total: ${totalBillPerPerson} custom: ${customNumber}`
		);
	}
};

let hideMessage = () => {
	if (billGrabber !== document.activeElement) {
		billMessageGrabber.style.display = "none";
	}
	if (amountOfPeopleGrabber !== document.activeElement) {
		peopleMessageGrabber.style.display = "none";
	}
	if (tipSelected === true) {
		tipSelectMessageGrabber.style.display = "none";
	}
};

let validateInputs = () => {
	if (billGrabber.value === "" || billGrabber.value === null) {
		billGrabber.style.outlineColor = "tomato";
		billMessageGrabber.style.display = "inline";
		billGrabber.focus();
	} else if (
		amountOfPeopleGrabber.value === "" ||
		amountOfPeopleGrabber.value === null
	) {
		amountOfPeopleGrabber.style.outlineColor = "tomato";
		peopleMessageGrabber.style.display = "inline";
		amountOfPeopleGrabber.focus();
	} else if (tipSelected === false) {
		tipSelectMessageGrabber.style.color = "tomato";
		tipSelectMessageGrabber.style.display = "inline";
		tipSelectGroupGrabber.focus();
	}
};

let getBtnSelected = () => {
	console.log("Clicked Btn");
	console.log(document.activeElement.id);
	fiveFlag = false;
	tenFlag = false;
	fifteenFlag = false;
	twentyFiveFlag = false;
	fiftyFlag = false;
	customFlag = false;
	tipSelected = false;
	// console.log(fiveFlag,tenFlag,fifteenFlag,twentyFiveFlag,fiftyFlag,customFlag,tipSelected)
	switch (document.activeElement.id) {
		case "fivePercent":
			fiveFlag = true;
			tipSelected = true;
            paintSelected();
            
			break;
		case "tenPercent":
			tenFlag = true;
			tipSelected = true;
			paintSelected()
			break;
		case "fifteenPercent":
			fifteenFlag = true;
			tipSelected = true;
			paintSelected();
			break;
		case "twentyfivePercent":
			twentyFiveFlag = true;
			tipSelected = true;
			paintSelected();
			break;
		case "fiftyPercent":
			fiftyFlag = true;
			tipSelected = true;
			paintSelected();
			break;
		case "customTip":
			customFlag = true;
			tipSelected = true;
			paintSelected();
			break;

		default:
			tipSelected = false;
			paintSelected();
			break;
	}
};

let reset = () => {
	billGrabber.value = '';
	fiveFlag = false;
	tenFlag = false;
	fifteenFlag = false;
	twentyFiveFlag = false;
	fiftyFlag = false;
	customFlag = false;
	tipSelected = false;
    amountOfPeopleGrabber.value = '';
    customPercentGrabber.value = '';
    tipResultAmountGrabber.innerHTML = '$$$'
    totalResultAmountGrabber.innerHTML = '$$$'
    billGrabber.focus();
	paintSelected();
};

let paintSelected = () => {
     let btns = document.querySelectorAll(".btn");
     switch (fiveFlag) {
         case true:
            document.getElementById("fivePercent").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("fivePercent").style.backgroundColor = "#00494d";
             break;
     }
     switch (tenFlag) {
         case true:
            document.getElementById("tenPercent").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("tenPercent").style.backgroundColor = "#00494d";
             break;
     }
     switch (fifteenFlag) {
         case true:
            document.getElementById("fifteenPercent").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("fifteenPercent").style.backgroundColor = "#00494d";
             break;
     }
     switch (twentyFiveFlag) {
         case true:
            document.getElementById("twentyfivePercent").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("twentyfivePercent").style.backgroundColor = "#00494d";
             break;
     }
     switch (fiftyFlag) {
         case true:
            document.getElementById("fiftyPercent").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("fiftyPercent").style.backgroundColor = "#00494d";
             break;
     }
     switch (customFlag) {
         case true:
            document.getElementById("customTip").style.backgroundColor = "#26c0ab";
             break;
     
         default:
            document.getElementById("customTip").style.backgroundColor = "#00494d";
             break;
     }
}
calcTipBtnGrabber.addEventListener("click", calc);
document.addEventListener("click", hideMessage);
buttonGroupTipGrabber.addEventListener("click", getBtnSelected);
resetBtnGrabber.addEventListener("click",reset)
