function changeH1() {
    document.querySelector("h1").innerHTML = "Edited with JS"
}

//Exercise 1
function calc() {
    let n1 = document.getElementById("firstN").value
    let n2 = document.getElementById("secondN").value
    if (n1 > n2) {
        console.log("The greater number of " + n1 + " and " + n2 + " is " + n1)
        document.createElement("p").innerHTML = "The smaller number of" + n1 + "and" + n2 + "is" + n1
        return n1, n2
    } else {
        console.log("The smaller number of " + n1 + " and " + n2 + " is " + n1)
        document.createElement("p").innerHTML = "The smaller number of" + n1 + "and" + n2 + "is" + n1
        return n2, n1
    }
}

//The greater number of 5 and 10 is 10.
//The smaller number of 5 and 10 is 5
