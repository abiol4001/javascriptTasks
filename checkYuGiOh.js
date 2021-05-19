function checkYuGiOh(n) {
    const numArray = [];
    const two = "yu";
    const three = "gi";
    const five = "oh";

    if (typeof(n) === "string") {
        if (isNaN(n)) {
            console.log(`invalid parameter: "${n}"`)
            return `invalid parameter: "${n}"` 
        }
        else {
          Number(n);
        }
        
    }
        for (let i = 1; i <= n ; i++) {

            if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                numArray.push(`${two}-${three}-${five}`)
            }
            else if (i % 2 === 0 && i % 3 === 0) {
                numArray.push(`${two}-${three}`)
            }
            else if (i % 2 === 0 && i % 5 === 0) {
                numArray.push(`${two}-${five}`)
            }
            else if (i % 3 === 0 && i % 5 === 0) {
                numArray.push(`${three}-${five}`)
            }
            else if (i % 2 === 0) {
                numArray.push(`${two}`)
            }
            else if (i % 3 === 0) {
                numArray.push(`${three}`)
            }
            else if (i % 5 === 0) {
                numArray.push(`${five}`) 
            }
            else {
                numArray.push(i);
            }
            
            
        }
    
        console.log(numArray);
        return numArray;
    
    }

    
    

checkYuGiOh(30);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh")