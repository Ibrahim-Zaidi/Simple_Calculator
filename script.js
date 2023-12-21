'use strict';

const numbers = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let string = '';

    console.log(numbers);

for (let i = 0 ; i < numbers.length ; i++) {

    numbers[i].addEventListener('click', function(e) {
        if (e.target.innerHTML === '=') {

            string =+ eval(string);
            result.value = string;

        } else if (e.target.innerHTML === 'AC') {

            string = '';
            result.value = string;

        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0 , string.length - 1);
            result.value = string;
        } else {
            string =+ e.target.innerHTML;
            result.value = string;

        };


        console.log(e);
    })


   /* 


    const shifre = numbers[i].innerHTML; 
    console.log(shifre);

   /* 
   if (arr.includes(numbers[i]))  {
            const num = Number(numbers[i].innerHTML);
    }

    console.log(num);
    */
    /* 
    if (arr.includes(numbers[i].innerHTML)) {

        console.log(x);
        
        numbers[i].addEventListener('click', function() {

        let numTurn = num(numbers[i].innerHTML);
        console.log(numbers[i].innerHTML);
        result.value = numTurn ; 
    }

)}  */


    

        
    
    /* {

        numbers[i].addEventListener('click', function(e) {

        

        result.innerHTML = num;

        console.log(num);

    } );
    }; */


};
