let randomNum = parseInt(Math.random() * 100)
console.log(randomNum);

const switchTheme = document.querySelector('.switchTheme')
const body = document.querySelector('body')
const submitButton = document.querySelector('.submit')
const guessInput = document.querySelector('#guessInput')
const message = document.querySelector('.message')

let numGuess = 1
let prevGuess = []
let playGame = true

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(guessInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess > 100) {
        alert("Please enter number below 100")
    } else if (guess < 1) {
        alert("Please enter number above than 1")
    } else {
        prevGuess.push()
        if (numGuess === 10) {
            displayMessage(`Game Over... Random number was ${randomNum}`)
            endGame()
        } else {
            displayMessage(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage("You guessed it right");
    } else if (guess > randomNum) {
        displayMessage("Number is tooo big");
    } else if (guess < randomNum) {
        displayMessage("Number is tooo small");
    }
}



function displayMessage(message) {
    message.innerHTML = `<p>${message}</p>`
}





switchTheme.addEventListener('click', function () {
    if (body.classList.contains('whiteTheme')) {
        body.classList.remove('whiteTheme')
        body.classList.add('darkTheme')
    } else if (body.classList.contains('darkTheme')) {
        body.classList.remove('darkTheme')
        body.classList.add('whiteTheme')
    }

    if (submitButton.classList.contains('submit')) {
        submitButton.classList.remove('submit')
        submitButton.classList.add('submitLight')
    } else if (submitButton.classList.contains('submitLight')) {
        submitButton.classList.remove('submitLight')
        submitButton.classList.add('submit')
    }
})

