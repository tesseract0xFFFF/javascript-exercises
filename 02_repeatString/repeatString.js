function repeatString(string, num) {

    let inputString = string;
    let inputNumber = num;
    

    // check for blank string input.
    if (inputString === ''){
         return '';
        }
    //    handle input number = 0 or input number negative cases.
       switch(inputNumber){
           case 0:
               return '';
               
           case -1:
               return 'ERROR';
       }
    // set a variable to hold future output.
    let outputString = '';
    // concatenate the string for (inputNumber - 1) times 
    for (let i = 0; i <= (inputNumber - 1); i++ ){

        outputString += inputString;
    }

    // will return string repeated (inputNumber - 1) times.

    return outputString;
};

repeatString('hey', 3);



// Do not edit below this line
module.exports = repeatString;
