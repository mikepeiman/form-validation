// set UI input variables
const nameField = document.getElementById('name')
const phoneField = document.getElementById('phone')
const zipcodeField = document.getElementById('zipcode')
const emailField = document.getElementById('email')

// create event listeners for our input fields
nameField.addEventListener('blur', validateName)
phoneField.addEventListener('blur', validatePhone)
zipcodeField.addEventListener('blur', validateZipcode)
emailField.addEventListener('blur', validateEmail)

// define functions
function validateName() {
  console.log('validateName')
  const re = /^[a-zA-Z]{2,15}$/
  if(!re.test(nameField.value)) {
    nameField.classList.add('is-invalid')
  } else {
    nameField.classList.remove('is-invalid')
  }
}

function validateEmail() {
  console.log('validateEmail')
  const re = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z]+\.[a-zA-Z]{2,12}/
  if(!re.test(emailField.value)) {
    emailField.classList.add('is-invalid')
  } else {
    emailField.classList.remove('is-invalid')
  }
}

function validatePhone() {
  console.log('validatePhone')
  // const re = /([0-9]?-?[0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]{10,11})/
  const re = /(\b\d\b)?([-. ])?(?:\b\d{10}\b)|(\b\d\b)?([-. ])?(?:(\b\d{3}\b)([-. ])?(\b\d{3}\b)([-. ])(?:\b\d{4}\b))/
  // const re = /\ba{3,3}\b$/
  // const re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/
  // const re = /\d{3}[-. ]?\d{3}[-. ]\d{4}/
  if(!re.test(phoneField.value)) {
    phoneField.classList.add('is-invalid')
  } else {
    phoneField.classList.remove('is-invalid')
  }
}

function validateZipcode() {
  console.log('validateZipcode')
  const re = /^[a-zA-Z][0-9][a-zA-Z]-?[0-9][a-zA-Z][0-9]$/
  if(!re.test(zipcodeField.value)) {
    zipcodeField.classList.add('is-invalid')
  } else {
    zipcodeField.classList.remove('is-invalid')
  }
}