
function convertFahrToCelsius(n) {

    let c;

    if ( typeof(n) === "number" ) {
        c = (n - 32 ) * ( 5 / 9 );
        console.log(c.toFixed(4));
        return(c.toFixed(4));
    }
    else if ( typeof(n) === "string") {
        c = (Number(n) - 32 ) * ( 5 / 9 );
        console.log(c.toFixed(4));
        return(c.toFixed(4));
    }
     else if ( typeof(n) === "object" && Array.isArray(n)) {
         console.log(`${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}.`)
         return (`${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}.`)
     }
     else if ( typeof(n) === "object") {
        console.log(`${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}.`)
        return(`${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}.`);
        
    }
   
    
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);  //should return `[1,2,3] is not a valid number but a/an array.`
convertFahrToCelsius({temp: 0});  //should return `{temp: 0} is not a valid number but a/an object.`