//console.log('Add validation!');

let formIsValid;
//set up boolean to see if form is valid

const form = document.querySelector('#parking-form')
const nameInput = document.querySelector('#name')
const carYearInput = document.querySelector('#car-year')
const carMakeInput = document.querySelector('#car-make')
const carModelInput = document.querySelector('#car-model')
const startDateInput = document.querySelector('#start-date')
const daysInput = document.querySelector('#days')
const credtCardInput = document.querySelector('#credit-card')
const cvvInput = document.querySelector('#cvv')
const expirationInput = document.querySelector('#expiration')
//set all of the variable definitions



form.addEventListener('input', event => {
    console.log('user input captured')
})

form.addEventListener('submit', event => {
    event.preventDefault()
    
    validateNameInput()
    validateCarYearInput()
    validateStartDateInput()
    validateDaysInput()
    //validatecreditCardInput()
    //validatecvvInput()
    //validateexpirationDateInput()

    if (formIsValid) {
        document.querySelector('#name-field').classList.add('input-valid')
        document.querySelector('.input-group').classList.add('input-valid')
        //document.querySelector('#start-date-field').classList.add('input-valid')
       // document.querySelector('#days-field').classList.add('input-valid')
        
    }
})


function validateNameInput() {
        if (nameInput === "") {
            const error = document.createElement('div')
            //creates an error div
            //console.log('the input is empty');
            document.querySelector('#name-field').classList.add("input-invalid")
            //turns label and border red by putting 'input-invalid' on parent div
            document.querySelector('#name-field').appendChild(error).innerHTML('Field is blank.')
            //adds error message saying that the field is blank.
            formisValid = false

        }
        else {
            formIsValid = true
        }
    }

function validateCarYearInput() {
        if (carYearInput.value < 1901 || carYearInput.value > 2021) {
            //checks if caryearInput is between 1901-2021
            const error = document.createElement('div')

            document.querySelector('#input-group').classList.add('input-invalid')
            document.querySelector('#car-field').appendChild(error).innerHTML("Car Year must be between 1900 and 2022")
            formIsValid = false
        }
        else {
            formisValid = true
        }
    }

function validateStartDateInput() {
        if (startDateInput === '') {
            const error = document.createElement('div')

            document.querySelector('#start-date-field').classList.add('input-invalid')
            document.querySelectory('#start-date').appendChild(error).innerHTML('Start Date Required')
            formisValid = false
        }
        else {
            formisValid = true
        }
    }

function validateDaysInput() {
    if (daysInput.value < 1 || daysInput.value > 30) {
        const error = document.createElement('div')

        document.querySelector('#days-field').classList.add('input-invalid')
        document.querySelector('#days').appendChild(error).innerHTML('Number of Days must be a number between 1-30.')
        formIsValid = false
    }
    else {
        formisValid = true
    }
}












//function validateCarYearInput(carYearInput) {
    //if the carYearInput is before 1900 then...
 //   if (carYearInput < 1900) {
//        return document.querySelector('.input-group').classList.add('input-invalid')
 //   } else {
 //       return (formIsValid === true)
//    }



//car year must be after 1900
//number of days must be a number
//number of days must be between 1 and 30
//add another validation--cvv must be a three digit number.  this can use the pattern attribute, or custom validation with JavaScript
//add the ability to show the user the total cost of their parking when they click the "make reservation" button.  the div with id 'total' should be filled with text showing the cost.  this should only occur if the form is valid. -- the cost is 5 dollars a day
//the requirements have changed for calculating cost.  the new cost is 5/weekday and 7/weekend day.  .map and .reduce will be very helpful in calculating teh total cost, as will the javascript date object
//validate the format of the credit card number--use the code in the read.me
//add validation for expiration date - must be a valid month and year in the correct format
//expiration date must not be in the past
//car year cannot be in the future
//date parking must be in the future

//the last four should have client side validation errors
