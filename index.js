//The task of doubling letters in a word.

const randomName = 'SLAVIK';
const arrName = Array.from(randomName);
const arrDobleLetter = arrName.map((ind) => ind+ind);
const res = arrDobleLetter.join('');
console.log(res);

// OR

function repetitionOfLetters() {
    let doubling = '';
   for (let i = 0; i < randomName.length; i++){
    doubling += randomName[i] + randomName[i] ;
   console.log(doubling);
   }
}
repetitionOfLetters();



// The task of determining the volume and area of cube.



function calculateVolumeAndArea(num) {
    let area = '';
    let vol = '';
        if(num !== 0){
            vol = Math.pow(num, 3);
            area = 6 * Math.pow(num, 2);
            console.log(`Об'єм куба:${vol}, площа всієї поверхні:${area}`);
        } else{
            console.log('Напишіть число більше 0')
        };
    }
    calculateVolumeAndArea(5);



//Task in which you need to return the compartment number depending on 
// the location entered the user.



function getCoupeNumber(num) {
    const tambur = [
       [1, 2, 3, 4],
       [5, 6, 7, 8],
       [9, 10, 11, 12],
       [13, 14, 15, 16,],
       [17, 18, 19, 20],
       [21, 22, 23, 24],
       [25, 26, 27, 28],
       [29, 30, 31, 32],
       [33, 34, 35, 36]
    ]
   if(num <= 0 || num > 36){
       console.log( 'Таких місць в вагоні не існує')
   }if( typeof(num) !== 'number'){
       console.log( 'Помилка. Перевірте правильність введеного номеру')
   }
       for( let i = 0; i < tambur.length; i++){
           for( let j = 0; j < tambur[i].length; j++){
               if( tambur[i][j] === num ){
                   console.log(`Купе номер: ${i+1}`);
               }
           }
       }
    
   }
   getCoupeNumber(15);




//Task in which you need enter any number (up to 6000) and output a
// report in the from of hours and minutes to the console.



function getTimeFromMinutes(num) {
    if ( typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)){
       console.log('Перевірьте правильність введених данних')
    }
   
    const hours = Math.floor(num / 60); 
    const minutes = num % 60;  
     
    let hourStr = '';
    let minuteStr = '';
   
    const timeArr1 =[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const timeArr2 = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101];
    const timeArr3 = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94];
   
   
   
   
   
   timeArr1.find(function(item){
       if(item == hours){
           hourStr = 'годин';
       }if (item == minutes){
           minuteStr = 'хвилин';
       }
   });
   
   timeArr2.find(function(item){
       if(item == hours){
           hourStr = 'година';
       }if (item == minutes){
           minuteStr = 'хвилина';
       }else {
           minuteStr = 'хвилин';
       };
   });
   
   timeArr3.find(function(item){
       if(item == hours){
           hourStr = 'години';
       }else{
           hourStr == 'годин';
       };
       if (item == minutes){
           minuteStr = 'хвилини';
       }
       
   });
   
   
    let result = `" Це ${hours} ${hourStr} та ${minutes} ${minuteStr} "`
   console.log (result);
   
   
   }
   getTimeFromMinutes(156);
   



   // Task with Fibonacci numbers




   function fib (num) {
    if (typeof(num) !== 'number' || num <= 0 || num % 1 !== 0){
        return '';
    }
    const arrNumbers = [0];
    for (let i = 1; i <num; i ++){
        if (i === 1){
            arrNumbers.push(1);
        }else {
            arrNumbers.push(arrNumbers[i-1] + arrNumbers[i-2]);
        }
    }

return arrNumbers.join(' ');

}
console.log(fib(100));
