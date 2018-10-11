document.addEventListener('DOMContentLoaded', function () {

    console.log('Script loaded!');
    handleFloatingLabel();
    handleQualityRange();
    handleDropdownButton();
    var passwordCheck = document.getElementById("passwordtoggle")
    passwordCheck.addEventListener("click", handlePasswordSwitcher)
});

function handleFloatingLabel() {
    var input = document.getElementsByClassName("js-name-input")[0]
    var label = document.getElementsByClassName("js-floating-label")[0]
    input.addEventListener("focusout", function (e) {
        if (input.value != "") {
            label.classList.add('is-floating')

        } else
            label.classList.remove('is-floating')
    });
}


function handlePasswordSwitcher() {
    var passwordInput = document.getElementsByClassName("js-password-input")[0]
    var passwordCheck = document.getElementById("passwordtoggle")
    if (passwordCheck.checked) {
        passwordInput.type = 'password'
    } else {
        passwordInput.type = 'text'
    }
}

function handleQualityRange() {
    var sliderInput = document.getElementById('quality')
    var sliderValue = sliderInput.value;
    var sliderOutput = document.getElementsByClassName('js-range-holder')[0]
    sliderInput.oninput = function () {
        var sliderWidth = sliderInput.offsetWidth;
        sliderOutput.setAttribute("data-value", this.value)
        sliderOutput.style.transform = "translateX(" + this.value * 3.11 + 'px)';
    }

}

function handleDropdownButton() {
    var mainButton = document.querySelector('.js-button__main')
    var bottomContainer = document.querySelector('.c-dropdown-container__bottom')
    console.log(mainButton);
    mainButton.addEventListener('click', dropdownSwapper)
    bottomContainer.addEventListener('click', dropdownSwapper)
}

var counter = 0;

function dropdownSwapper() {
    var bottomContainer = document.querySelector('.c-dropdown-container__bottom')
    if (counter == 0) {
        bottomContainer.style.display = 'block';
        counter += 1;
    } else {
        bottomContainer.style.display = 'none';
        counter = 0
    }
}