const numberInput = document.getElementById("numberInput");
const result = document.getElementById("resultarea")
const error = document.getElementById("errors")
const validatevalue = () => {
    result.innerText = ""
    error.innerText = ""
    if (numberInput.value === "") {
        error.innerText = ("Please Enter Number")
        return false
    }
    return true
}
const refresh=()=>
    {
        result.innerText=""
        error.innerText=""
        numberInput.value=""
        attempts=5
    }
const originalNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;
const verify = () => {
    // let contin = true
    // while (contin) {
    attempts--;
    if (numberInput.value === originalNumber) {
        result.innerHTML=("Congratulations🎉🎊!!! You've guessed the correct number.");
        return;
    }
    else if (numberInput.value > originalNumber) {
        error.innerHTML=(`Guess below this number😥.<br/>you have left ${attempts} attempts`);
    } else if (numberInput.value < originalNumber) {
        error.innerHTML=(`Guess above this number😥.<br/>you have left ${attempts} attempts`);
    }
    if (attempts === 0) {
        error.innerHTML=(`Sorry😓, you've used all your attempts.<br/> The correct number was ${originalNumber}.`);
        setTimeout(refresh,3000)

    }
}


