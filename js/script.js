const ALLBUTTON = document.querySelectorAll(".btn");
const CLICKSOUND = document.getElementById('clickSound');
const EQUALBUTTON = document.getElementById("js-equal-btn");
let valueBox = document.getElementById("js-value-box");
let values = document.querySelectorAll(".value");

ALLBUTTON.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        CLICKSOUND.play();
        ALLBUTTON.forEach(function (btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    })
});

function clearValueBox() {
    valueBox.value = "";
}

function equalTo() {
    let result = valueBox.value;
    if (eval(result) == undefined) {
        valueBox.value = "";
    }
    else {

        valueBox.value = eval(result);
    }
    // console.log(eval(result), typeof eval(result));
}

document.getElementById("js-clear-value").addEventListener("click", function (e) {
    e.preventDefault();
    clearValueBox()
});

values.forEach(function (button) {
    button.addEventListener("click", function (event) {
        buttonValue = button.innerText;
        valueBox.value += buttonValue;
        // console.log(buttonValue)
    })
});

EQUALBUTTON.addEventListener("click", (event) => {
    evaluateExpression();
    equalTo();
})



function evaluateExpression() {
    try {
        let result = valueBox.value;
        valueBox.value = eval(result);
        // console.log(eval(result), typeof eval(result));
    } catch (error) {
        valueBox.value = "Error";
        console.error("Error evaluating expression:", error);
    }
}


function clearSingleValue() {
    valueBox.value = valueBox.value.slice(0, -1);
}


document.querySelector("#js-clear-single-value").addEventListener("click", (button) => {
    clearSingleValue();
})