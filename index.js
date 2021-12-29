
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const addBtn = document.getElementById('add')
    const subtractBtn = document.getElementById('subtract')
    const multiplyBtn = document.getElementById('multiply')
    
    console.log(addBtn)
    
    addBtn.addEventListener('click', function(){
        const num1 = parseInt(document.getElementById('number1').value)
        const num2 = parseInt(document.getElementById('number2').value)

        const answerData = add(num1, num2);
        addToAnswerDiv(answerData);
    })

    subtractBtn.addEventListener('click', function(){
        const num1 = parseInt(document.getElementById('number1').value)
        const num2 = parseInt(document.getElementById('number2').value)

        const answerData = subtract(num1, num2);
        addToAnswerDiv(answerData)
    })

    multiplyBtn.addEventListener('click', function(){
        const num1 = parseInt(document.getElementById('number1').value)
        const num2 = parseInt(document.getElementById('number2').value)

        const answerData = multiply(num1, num2);
        addToAnswerDiv(answerData);
    })

    function add(a, b){
        return a + b;
    }
    
    function subtract(a, b){
        return a - b;
    }
    
    function multiply(a, b){
        return a * b;
    }

    function addToAnswerDiv(data){
        console.log(data)
        const answerDiv = document.getElementById("answer");
        answerDiv.innerHTML = data;
    }
});