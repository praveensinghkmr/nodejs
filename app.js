// Sample app to take inputs from user and add them
//{} // to resolve 
const prompt = require('prompt');

// function to add two numbers 

function add() {
    prompt.start();

    prompt.get(['num1', 'num2'], 
    function(err, res){
        // To handle errors if any
        if(err){
            console.log(err);
        } else {
            var result = parseFloat(res.num1) + parseFloat(res.num2);

            // Print the result 
            console.log('Sum of ' + res.num1 + ' and ' + res.num2 + ' is: ' + result);
        }
    });
}
add();