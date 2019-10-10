console.log('PING');

// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. 

function chickenMonkey(){
    for(let i = 1; i <= 100; i++){
        // For numbers which are multiples of both five and seven print "ChickenMonkey".
        if (i % 5 == 0 && i % 7 === 0){
            console.log(i, "ChickenMonkey")
        }
        // For multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number 
        else if (i % 5 === 0){
            console.log(i, "Chicken");
        }
        // For the multiples of seven (7, 14, 21, etc.) print "Monkey". 
        else if (i % 7 === 0){
            console.log(i, "Monkey");
        }
        // Anything else: just print the number
        else {
            console.log(i, i);
        }
    }
}

chickenMonkey();