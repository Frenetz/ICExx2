const button1 = document.getElementById("myButton");
const button2 = document.getElementById("ButExit");
const div = document.getElementById("myDiv");
const div2 = document.getElementById("myDiv2");
const div3 = document.getElementById("anForm");
const shadow = document.querySelector(".shadow");
const inputs = document.getElementsByClassName("main__form-input");
const mainInputName = document.getElementById("mainInputName");
const mainInputEmail = document.getElementById("mainInputEmail");
const mainInputTel = document.getElementById("mainInputTel");

const button3 = document.getElementById("myDivButton");
const myDivInputName = document.getElementById("myDivInputName");
const myDivInputEmail = document.getElementById("myDivInputEmail");
const myDivInputTel = document.getElementById("myDivInputTel");

const button4 = document.getElementById("myButton2");
const myDiv2InputName = document.getElementById("myDiv2InputName");
const myDiv2InputEmail = document.getElementById("email-input");
const myDiv2InputTel = document.getElementById("phone-input");

const telMask = document.querySelectorAll("phone_mask");

div.style.display = "none";
div2.style.display = "none";

button1.addEventListener("click", function (event) {
  if (window.innerWidth >= 825) {
    event.stopPropagation();
    div.classList.toggle("main__form-active");

    if (div.style.display === "flex") {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
    shadow.classList.toggle("shadow-active");
  } else {
    event.stopPropagation();
    if (div2.style.display === "flex") {
      div2.style.display = "none";
    } else {
      div2.style.display = "flex";
    }
    shadow.classList.toggle("shadow-active");
  }
});

button2.addEventListener("click", function (event) {
  if (mainInputName.value.length === 0) {
    if (!mainInputName.classList.contains("inputWithoutText")) {
      mainInputName.classList.toggle("inputWithoutText");
    }
  } else {
    if (mainInputName.classList.contains("inputWithoutText")) {
      mainInputName.classList.toggle("inputWithoutText");
    }
  }

  if (mainInputEmail.value.length === 0) {
    if (!mainInputEmail.classList.contains("inputWithoutText")) {
      mainInputEmail.classList.toggle("inputWithoutText");
    }
  } else {
    if (mainInputEmail.classList.contains("inputWithoutText")) {
      mainInputEmail.classList.toggle("inputWithoutText");
    }
  }

  if (mainInputTel.value.length === 0) {
    if (!mainInputTel.classList.contains("inputWithoutText")) {
      mainInputTel.classList.toggle("inputWithoutText");
    }
  } else {
    if (mainInputTel.classList.contains("inputWithoutText")) {
      mainInputTel.classList.toggle("inputWithoutText");
    }
  }
});

button3.addEventListener("click", function (event) {
  if (myDivInputName.value.length === 0) {
    if (!myDivInputName.classList.contains("inputWithoutText")) {
      myDivInputName.classList.toggle("inputWithoutText");
    }
  } else {
    if (myDivInputName.classList.contains("inputWithoutText")) {
      myDivInputName.classList.toggle("inputWithoutText");
    }
  }

  if (myDivInputEmail.value.length === 0) {
    if (!myDivInputEmail.classList.contains("inputWithoutText")) {
      myDivInputEmail.classList.toggle("inputWithoutText");
    }
  } else {
    if (myDivInputEmail.classList.contains("inputWithoutText")) {
      myDivInputEmail.classList.toggle("inputWithoutText");
    }
  }

  if (myDivInputTel.value.length === 0) {
    if (!myDivInputTel.classList.contains("inputWithoutText")) {
      myDivInputTel.classList.toggle("inputWithoutText");
    }
  } else {
    if (myDivInputTel.classList.contains("inputWithoutText")) {
      myDivInputTel.classList.toggle("inputWithoutText");
    }
  }
});

button4.addEventListener("click", function (event) {
  if (myDiv2InputName.value.length === 0) {
    if (!myDiv2InputName.classList.contains("inputWithoutText")) {
      myDiv2InputName.classList.toggle("inputWithoutText");
    }
  } else {
    if (myDiv2InputName.classList.contains("inputWithoutText")) {
      myDiv2InputName.classList.toggle("inputWithoutText");
    }
  }

  if (myDiv2InputEmail.value.length === 0) {
    if (!myDiv2InputEmail.classList.contains("inputWithoutText")) {
      myDiv2InputEmail.classList.toggle("inputWithoutText");
    }
  } else {
    if (myDiv2InputEmail.classList.contains("inputWithoutText")) {
      myDiv2InputEmail.classList.toggle("inputWithoutText");
    }
  }

  if (myDiv2InputTel.value.length === 0) {
    if (!myDiv2InputTel.classList.contains("inputWithoutText")) {
      myDiv2InputTel.classList.toggle("inputWithoutText");
    }
  } else {
    if (myDiv2InputTel.classList.contains("inputWithoutText")) {
      myDiv2InputTel.classList.toggle("inputWithoutText");
    }
  }
});

document.addEventListener("click", function (event) {
  if (window.innerWidth >= 825) {
    if (div.style.display === "none") {
    } else {
      const targetElement = event.target;
      if (!div.contains(targetElement)) {
        div.style.display = "none";
        div.classList.toggle("main__form-active");
        shadow.classList.toggle("shadow-active");
      }
    }
  } else {
    if (div2.style.display === "none") {
    } else {
      const targetElement = event.target;
      if (!div2.contains(targetElement)) {
        div2.style.display = "none";
        shadow.classList.toggle("shadow-active");
      }
    }
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 820) {
    if (div.style.display === "flex") {
      div.style.display = "none";
      div.classList.toggle("main__form-active");
      div2.style.display = "flex";

      myDiv2InputName.value = myDivInputName.value;
      myDiv2InputEmail.value = myDivInputEmail.value;
      myDiv2InputTel.value = myDivInputTel.value;
    }
  } else {
    if (div2.style.display === "flex") {
      div2.style.display = "none";
      div.classList.toggle("main__form-active");
      div.style.display = "flex";

      myDivInputName.value = myDiv2InputName.value;
      myDivInputEmail.value = myDiv2InputEmail.value;
      myDivInputTel.value = myDiv2InputTel.value;
    }
  }
});

//$(".phone_mask").mask("+7(999)999-99-99");
// const phoneMask = new IMask(telMask, {
//   mask: "+{7}(000)000-00-00",
// });

function validateEnglish(event) {
  var key = event.key;
  var regex = /^[a-zA-Z0-9.@\s]*$/;
  return regex.test(key);
}

div.addEventListener("submit", function () {
  event.preventDefault();
  if (
    myDivInputName.value.length != 0 &&
    myDivInputEmail.value.length != 0 &&
    myDivInputTel.value.length != 0
  ) {
    this.submit();
  }
});

div2.addEventListener("submit", function () {
  event.preventDefault();
  if (
    myDiv2InputName.value.length != 0 &&
    myDiv2InputEmail.value.length != 0 &&
    myDiv2InputTel.value.length != 0
  ) {
    this.submit();
  }
});

div3.addEventListener("submit", function () {
  event.preventDefault();
  if (
    mainInputName.value.length != 0 &&
    mainInputEmail.value.length != 0 &&
    mainInputTel.value.length != 0
  ) {
    this.submit();
  }
});

var phoneMask = IMask(document.getElementById("phone-input"), {
  mask: "+{7}(000)000-00-00",
});

var phoneMask2 = IMask(document.getElementById("myDivInputTel"), {
  mask: "+{7}(000)000-00-00",
});

var phoneMask3 = IMask(document.getElementById("mainInputTel"), {
  mask: "+{7}(000)000-00-00",
});
