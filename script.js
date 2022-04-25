//Exercise 1
function calc() {
    let n1 = document.getElementById("firstN").value
    let n2 = document.getElementById("secondN").value
    if (n1 > n2) {
        document.getElementById("result").innerHTML = "The greater number of " + n1 + " and " + n2 + " is " + n1;
        console.log("The greater number of " + n1 + " and " + n2 + " is " + n1)
        return n1, n2
    } else {
        document.getElementById("result").innerHTML = "The smaller number of " + n1 + " and " + n2 + " is " + n1;
        console.log("The smaller number of " + n1 + " and " + n2 + " is " + n1)
        return n2, n1
    }
}

//Exercise 2
function helloWorld(){
    let langCode = document.getElementById("lCode").value
    if (langCode === "es"){
        console.log("Hola Mundo")
    } else if (langCode === "de"){
        console.log("Hallo Welt")
    } else if (langCode === "en"){
        console.log("Hello World")
    } else {
        console.log("Not a valid language code")
    }
}

//Exercise 3
function retirement(){
    let userAge = document.getElementById("userAge").value
    let retAge = document.getElementById("retAge").value

     alert("You have " + (retAge - userAge) + " years left until you can retire." + "It's " + new Date().getFullYear() + ", so you can retire in " + (new Date().getFullYear() + (retAge - userAge)) + ".")


    /*let age = document.getElementById("age").value
    let retirementAge = document.getElementById("retirementAge").value
    let currentAge = 2020 - age
    let retirementYear = currentAge + retirementAge
    console.log("You will retire in " + retirementYear)
    document.createElement("p").innerHTML = "You will retire in " + retirementYear*/
}

//The greater number of 5 and 10 is 10.
//The smaller number of 5 and 10 is 5
