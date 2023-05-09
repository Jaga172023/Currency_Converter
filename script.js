const inputEl = document.getElementById("inputVal")
const outputEl = document.getElementById("outputVal")
const inputValEl = document.getElementById("inputCurrency")
const outputValEl = document.getElementById("outputVal")
const exRateEl = document.getElementById("exRate")

function getInput() {
    // console.log("Value changed!!");
    // console.log(inputEl.value);

    fetch(`https://v6.exchangerate-api.com/v6/3be6a850465ee29e7e986a13/latest/${inputEl.value}`
    )
        .then((res)=>res.json())
        .then((data)=> {
            const rate = data.conversion_rate[outputEl.value];
            console.log(rate);
        });

}

function getOutput() {
    // console.log("Output Called !!");
    // console.log(outputEl.value);
}

function getInputVal() {
    // console.log("Input Received !!");
    // console.log(inputValEl.value);


}


inputEl.addEventListener("change", getInput)
outputEl.addEventListener("change", getOutput)
inputValEl.addEventListener("input", getInputVal)
