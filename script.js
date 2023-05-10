const inputEl = document.getElementById("inputVal")
const outputEl = document.getElementById("outputVal")
const inputValEl = document.getElementById("inputCurrency")
const outputValEl = document.getElementById("outputCurrency")
const exRateEl = document.getElementById("exRate")

getResult1();

function getResult1() {
    // console.log("Value changed!!");
    // console.log(inputEl.value);

    fetch(`https://v6.exchangerate-api.com/v6/3be6a850465ee29e7e986a13/latest/${inputEl.value}`
    )
    
        .then((res)=>res.json())
        .then((data)=> {
            const rate = data.conversion_rates[outputEl.value];
            // console.log(data);
            // console.log(rate);

            exRateEl.innerText = `1 ${inputEl.value}  =  ${rate} ${outputEl.value}`
            
            outputValEl.value = (inputValEl.value * rate).toFixed(2);
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


inputEl.addEventListener("change", getResult1)
outputEl.addEventListener("change", getResult1)
inputValEl.addEventListener("input", getResult1)
