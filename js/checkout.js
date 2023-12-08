
// Exercise 6
function validate() {
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
		email:/^[\w.-]+@[a-z0-9]+\.[a-z0-9-.]+/i,
		password: /^.{3,15}$/,                         
		address:/^.{3,}$/i, 
		phoneNumber:/^\d{9,13}$/
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

	if(error > 0) {
		alert("Error");
	}else{
		alert("OK");
	}

}






