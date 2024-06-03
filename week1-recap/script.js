// let user = Number(prompt('Guess a secret number between 1- 100'))
// let user = prompt('enter number')
// user= Number(user)
// console.log(user)

// function guessNumber() {
//     let randomNum = Math.floor(Math.random()* 100)+1;
    

//     if (user===randomNum) {
//         console.log(`correct secret number is ${user}`);
//     }
//     else if (user>randomNum) {
//         console.log(`number too high. Try again`);
//        return user; 
//     }
//     else if (user<randomNum)
//         {
//         console.log(`Number too low. Try again`);
//     }
//     else{
//         console.log(`enter a number`);
//     }
// }
// guessNumber()




function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i%3 === 0 && i %5 ===0) { 
          console.log('FizzBuzz');
          
       } else if (i%3 === 0) {
          console.log('Fizz');
        } else if (i % 5 ===0) {
          console.log('Buzz');
        } else {
          console.log(i);
        }
       
      }   
}

fizzBuzz()


















