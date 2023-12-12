
// Exercise 6
function validate(event) {

	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastName = document.getElementById("fLastName");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhoneNumber = document.getElementById("fPhoneNumber");
	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastName = document.getElementById("errorLastName");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhoneNumber = document.getElementById("errorPhoneNumber");

	// Validate fields entered by the user: name, phone, password, and email

	function validateField(field, regex, errorElement) {
		if (field.value === "" || !regex.test(field.value)) {
			field.classList.add("is-invalid");
			field.classList.remove("is-valid");
			errorElement.innerText = "Por favor, ingresa un valor válido.";
			error++;
		} else {
			field.classList.add("is-valid");
			field.classList.remove("is-invalid");
			errorElement.innerText = "";
		}
	}


	let validateFlds = {
		firstName: /^[a-z]{3,15}$/i,
		lastName: /^[a-z]{3,15}$/i,
		email: /^[\w.-]+@[a-z0-9]+\.[a-z0-9-.]+/i,
		password: /^.{3,15}$/,
		address: /^.{3,}$/i,
		phoneNumber: /^\d{9,13}$/
	};

	console.log(fName.value);
	console.log(fLastName.value);
	console.log(fEmail.value);
	console.log(fPassword.value);
	console.log(fAddress.value);
	console.log(fPhoneNumber.value);


	validateField(fName, validateFlds.firstName, errorName);
	validateField(fLastName, validateFlds.lastName, errorLastName);
	validateField(fEmail, validateFlds.email, errorEmail);
	validateField(fPassword, validateFlds.password, errorPassword);
	validateField(fAddress, validateFlds.address, errorAddress);
	validateField(fPhoneNumber, validateFlds.phoneNumber, errorPhoneNumber);

	if (error > 0) {
		event.preventDefault();
		alert("Error");
	} else {
		alert("OK");

    clearFields();
	clearStyles();

		console.log("First Name: " + fName.value);
		console.log("Last Name: " + fLastName.value);
		console.log("Email: " + fEmail.value);
		console.log("Password: " + fPassword.value);
		console.log("Address: " + fAddress.value);
		console.log("Phone Number: " + fPhoneNumber.value);
	}

}
//Limpiar campos al validar
function clearFields() {
	fName.value = "";
	fLastName.value = "";
	fEmail.value = "";
	fPassword.value = "";
	fAddress.value = "";
	fPhoneNumber.value = "";
}

//Limpiar estilos de campos 
function clearStyles() {
	fName.classList.remove("is-valid", "is-invalid");
	fLastName.classList.remove("is-valid", "is-invalid");
	fEmail.classList.remove("is-valid", "is-invalid");
	fPassword.classList.remove("is-valid", "is-invalid");
	fAddress.classList.remove("is-valid", "is-invalid");
	fPhoneNumber.classList.remove("is-valid", "is-invalid");

	errorName.innerText = "";
	errorLastName.innerText = "";
	errorEmail.innerText = "";
	errorPassword.innerText = "";
	errorAddress.innerText = "";
	errorPhoneNumber.innerText = "";
}