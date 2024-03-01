const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");

const checkInputs = {
  firstName: () => {
    const firstNameValue = firstName.value.trim(); //trim to delete blank space.
    const nameRegex = /^[a-zA-Z]{2,14}$/;
    if (firstNameValue === "") {
      setErrorInput(firstName, "First name cannot be blank.");
    } else if (!firstNameValue.match(nameRegex)) {
      setErrorInput(firstName, "Name must be valid");
    } else {
      setSuccessInput(firstName);
    }
  },
  lastName: () => {
    const lastNameValue = lastName.value.trim(); //trim to delete blank space.
    const nameRegex = /^[a-zA-Z]{2,14}(\s[A-Z][a-zA-Z]{2,14})*$/;
    if (lastNameValue === "") {
      setErrorInput(lastName, "Last name cannot be blank.");
    } else if (!lastNameValue.match(nameRegex)) {
      setErrorInput(lastName, "Name must be valid");
    } else {
      setSuccessInput(lastName);
    }
  },
  birthDate: () => {
    const birthDateValue = birthDate.value;
    if (birthDateValue === "") {
      return setErrorInput(birthDate, "Birth date cannot be blank.");
    }
    // Calculate the date for 18 years ago from the current date to focus on
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    eighteenYearsAgo.setDate(eighteenYearsAgo.getDate() - 1);
    if (Datepicker.parseDate(birthDateValue, "dd-mm-yyyy") > eighteenYearsAgo) {
      console.log(birthDateValue);
      return setErrorInput(birthDate, "You must be at least 18 years old");
    }
    return setSuccessInput(birthDate);
  },

  email: () => {
    const emailValue = email.value.trim();
    if (emailValue === "") {
      return setErrorInput(email, "Email cannot be blank.");
    }
    if (!validateEmail(emailValue)) {
      return setErrorInput(email, "Enter a valid email address");
    }
    return;
  },
};

firstName.addEventListener("input", () => {
  checkInputs.firstName();
});
lastName.addEventListener("input", () => {
  checkInputs.lastName();
});
// custom event injected by Datepicker
birthDate.addEventListener("changeDate", () => {
  checkInputs.birthDate();
});

form.addEventListener("submit", (e) => {
  Object.keys(checkInputs).forEach((input) => {
    e.preventDefault();
    checkInputs[input]();
  });
  const noErrors = !document.querySelector(".form__control.error");
  if (noErrors) console.log("no errors");
});

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form__control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

function validateEmail(email) {
  let regular_expressions =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

/* DATE PICKER */
const datepicker = new Datepicker(birthDate, {
  autohide: true,
  maxDate: new Date(),
  format: "dd/mm/yyyy",
  orientation: "top",
});

//   const response = await fetch("/social_signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${ssf_key}`,
//     },
//     body: JSON.stringify({
//       firstName,
//       lastName,
//       age,
//       email,
//     }),
//   });
