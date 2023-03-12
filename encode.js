// Loop through each letter, get its index from nonjumbled
// then replace the letter with the letter from jumbled

// Create strings to turn into arrays
const nonjumbledstring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS1234567890 "
const jumbledstring = "avhVGASOpQHKELrnsbxkmegdqTtDFYMUcyiuNWlfRjBIPoJCzXwS1234567890 "

// Turn strings into arrays
const nonjumbled = nonjumbledstring.split("")
const jumbled = jumbledstring.split("")




function encode(input) {

    let output = ""


    for (let i = 0; i < input.length; i++) {
        output = output + jumbledstring[nonjumbled.indexOf(input[i])]
    }

    document.getElementById("Output").innerText = "Output: " + output
}

function decode(input) {

    let output = ""


    for (let i = 0; i < input.length; i++) {
        output = output + nonjumbledstring[jumbled.indexOf(input[i])]
    }

    document.getElementById("Output").innerText = "Output: " + output

}



