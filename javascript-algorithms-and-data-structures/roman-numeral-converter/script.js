// variables
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// functions

// events
convertBtn.addEventListener("click", ()=>{
    output.innerText = number.value;

});
