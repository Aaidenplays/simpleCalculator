//this is a comment. it is not read by the compiler and is only a note for the developer. NOT CODE
/**
*THIS IS ALSO A COMMENT
*/

/*
THIS IS ALSO A COMMENT
*/


window.addEventListener('DOMContentLoaded', (event) => { //this line is just markup for adding to an HTML dom. You will always do this. You dont need to understand it. Just know that it is necessary when using JS with HTML
    /**
     *The next 3 lines of code is for GRABBING the HTML button elements for +,-,X so that we can add logic down the line  
    */
    const addBtn = document.getElementById('add')
    const subtractBtn = document.getElementById('subtract')
    const multiplyBtn = document.getElementById('multiply')
    
    /**
     * addEventListenter() is FUNCTION we use to add functionality to HTML elements
     * We want a button to DO something when we click on it
     *
     * notice that addEventListener takes 2 ARGUMENTS<also known as PARAMETERS>
     * 
     * PARAM1 - the action on the HTML element that triggers the event
     * notice here we are using "click".
     * 
     * When a button is CLICKED the logic inside of the BLOCK<the stuff inside of the {}> will be executed
    */
    addBtn.addEventListener('click', function(){
        /**
         * Why are we using .value?
         * document.getElementById('number1') returns the html element for the button inside of index.html with the id "number1"
         * In our case, we specifically want ONLY the value INSIDE of that FIELD
         * .value is an ATTRIBUTE that returns the value of the html rather than the html element itself. html elements cannot be used to perform mathematical operations
         * 
         * Why are we using parseInt() function? 
         *      document.getElementById('number1').value returns a string
         *      strings cannot be operated upon in a mathematical way
         *      FOR INSTANCE
         *          "4" + "5" = "45"
         *      we need to CONVERT the string into an integer so that we can execute a mathematical operation
         *      Once the string is converted into a integer<a number> we can the do the following operation. Notice the lack of quotations ""
         *          4 + 9 = 13
        */
        const num1 = parseInt(document.getElementById('number1').value) //GRABBING the html element
        const num2 = parseInt(document.getElementById('number2').value) //GRABBING the html element

        const answerData = add(num1, num2); // Calling the necessary function with the VALUE of the grabbed HTML element
        addToAnswerDiv(answerData); // Placing the return of the necessary function inside of the innerHTML of the div on the HTML side
    })

    subtractBtn.addEventListener('click', function(){
        const num1 = parseInt(document.getElementById('number1').value)//GRABBING the html element
        const num2 = parseInt(document.getElementById('number2').value)//GRABBING the html element

        const answerData = subtract(num1, num2); // Calling the necessary function with the VALUE of the grabbed HTML element
        addToAnswerDiv(answerData) // Placing the return of the necessary function inside of the innerHTML of the div on the HTML side
    })

    multiplyBtn.addEventListener('click', function(){
        const num1 = parseInt(document.getElementById('number1').value)//GRABBING the html element
        const num2 = parseInt(document.getElementById('number2').value)//GRABBING the html element

        const answerData = multiply(num1, num2);// Calling the necessary function with the VALUE of the grabbed HTML element
        addToAnswerDiv(answerData);// Placing the return of the necessary function inside of the innerHTML of the div on the HTML side
    })

    /**
     * The next 11 lines of code are the DEFINITIONS of the functions that we are using above. 
     * Notice that they can be defined AFTER they are used.  
     * Placement of a function does not matter as long as it is inside of the same file it is used.
     * functions can be exported into other files if necessary
     * 
     * The name of the functions are add, subtract, and multiply. 
     * They take 2 arguments/parameters each
     * A mathematical opertation is done 
     * the value of that operation is then RETURNED 
    */
    function add(a, b){
        return a + b;
    }
    
    function subtract(a, b){
        return a - b;
    }
    
    function multiply(a, b){
        return a * b;
    }

    /**
     * This function is responsible for appending something to the page. 
     * Whatever is passed into the argument/parameter "data" will be appended to the page
    */
    function addToAnswerDiv(data){
        const answerDiv = document.getElementById("answer"); //stores the html element with ID "answer into the VARIABLE answerDiv"
        answerDiv.innerHTML = data; //sets the value of the innerHTML of answerDiv to the "data" argument that is being passed in via the parameter/argument
    }
});