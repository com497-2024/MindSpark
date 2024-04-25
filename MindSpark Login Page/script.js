/*JavaScript for Login Page!*/
//I added this too!
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var birthday = new Date(document.getElementById('birthday').value);
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
  }
  var parentEmail = document.getElementById('parentEmail').value;

  var isValid = true;

  if (!email.trim()) {
      showError('email', 'Email can\'t be blank');
      isValid = false;
  }

  if (!password.trim()) {
      showError('password', 'Password can\'t be blank');
      isValid = false;
  }

  if (age < 13) {
      if (!parentEmail.trim()) {
          showError('parent-email', 'Parent/Teacher email can\'t be blank');
          isValid = false;
      }
  }

  if (isValid) {
      // Proceed with form submission
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Birthday:', birthday);
      console.log('Parent/Teacher Email:', parentEmail);
      // Replace this with actual form submission code
  }
});

function showError(fieldId, errorMessage) {
  var field = document.getElementById(fieldId);
  var errorElement = field.querySelector('.error-txt');
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'block';
}
//I added this

const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}

fetch('countries.json')
.then(response => response.json())
.then(countries => {
    const countryDropdown = document.getElementById('country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countryDropdown.appendChild(option);
    });
})
.catch(error => console.error('Error fetching countries:', error));

const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});