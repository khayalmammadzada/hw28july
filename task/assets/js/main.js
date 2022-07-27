// let number = prompt("Ededi daxil edin")
// let remainder=number%7
// if(number % 7 == 0){
//     console.log(number);
// }else{
//     if(remainder>=4){
//         console.log(+number+(7- +remainder));
//     }
//     else{
//         console.log(number-remainder);
//     }
// }



/* Task-2 */


let number=prompt("Ededi daxil edin")
let count=0
if(number<50){
   for (let i = 3; i < number; i++) {
       if(i%3==0){
           count++
       }
   }
   console.log(count);
} else if(number>50 && number<100){
    for (let i = 5; i < number; i++) {
        if(i%5==0){
            count++
        }
    }
    console.log(count);
 }else if(number>100){
    for (let i = 8; i < number; i++) {
        if(i%8==0){
            count++
        }
    }
    console.log(count)
}
