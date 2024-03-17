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
      return;
    }
    if (!firstNameValue.match(nameRegex)) {
      setErrorInput(firstName, "Name must be valid");
      return;
    }
    setSuccessInput(firstName);
    return;
  },
  lastName: () => {
    const lastNameValue = lastName.value.trim(); //trim to delete blank space.
    const nameRegex = /^[a-zA-Z]{2,14}(\s[A-Z][a-zA-Z]{2,14})*$/;
    if (lastNameValue === "") {
      setErrorInput(lastName, "Last name cannot be blank.");
      return;
    }
    if (!lastNameValue.match(nameRegex)) {
      setErrorInput(lastName, "Name must be valid");
      return;
    }
    setSuccessInput(lastName);
    return;
  },
  birthDate: () => {
    const birthDateValue = birthDate.value;
    if (birthDateValue === "") {
      setErrorInput(birthDate, "Birth date cannot be blank.");
      return;
    }
    // Calculate the date for 18 years ago from the current date to focus on
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    eighteenYearsAgo.setDate(eighteenYearsAgo.getDate() - 1);

    // checks if the selected date is less than 18 years ago
    if (Datepicker.parseDate(birthDateValue, "dd-mm-yyyy") > eighteenYearsAgo) {
      setErrorInput(birthDate, "You must be at least 18 years old");
      return;
    }
    setSuccessInput(birthDate);
    return;
  },

  email: () => {
    const emailValue = email.value.trim();

    // dataset is defined here
    // LINK - backend/src/views/signupForm.ejs:83
    const emailShouldBe = dataEmail;
    if (isSocialSignup) {
      if (!validateEmail(emailValue)) {
        window.location.href = "/?error=invalid email";
        return;
      }
      if (emailValue !== emailShouldBe) {
        window.location.href = '/?error="email does not match';
        return;
      }
    }

    if (emailValue === "") {
      setErrorInput(email, "Email cannot be blank");
      return;
    }
    if (!validateEmail(emailValue)) {
      setErrorInput(email, "Enter a valid email address");
      return;
    } else {
      setSuccessInput(email);
    }

    return;
  },
};

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
  minDate: new Date().setFullYear(new Date().getFullYear() - 100),
  format: "dd/mm/yyyy",
  orientation: "top",
});

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
  e.preventDefault();
  Object.keys(checkInputs).forEach((input) => {
    checkInputs[input]();
  });
  const noErrors = !document.querySelector(".form__control.error");
  if (noErrors) {
    fetch(actionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ssfKey}`,
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        birthDate: birthDate.value,
        email: email.value,
      }),
    }).then(async (res) => {
      if (res.status === 200) {
        window.location.href = "/complete_signup/?success=1";
      } else {
        console.log(await res.json());
        setTimeout(() => {
          window.location.href = "/complete_signup/?error=1";
        }, 5000);
      }
    });
  }
});
