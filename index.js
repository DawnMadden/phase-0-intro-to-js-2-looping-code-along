// solution
function writeCards(names,events) {
    let newArray=[];
    for (let i = 0; i < names.length; i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
}
return newArray
}



function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
    console.log(countDown--);    
    }
    
} 