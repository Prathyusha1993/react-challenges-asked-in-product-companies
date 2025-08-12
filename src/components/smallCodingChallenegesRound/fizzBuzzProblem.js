function fizzBuzz(){
    for(let i=1; i <= 100; i++){
        let output='';
        if(i%3 === 0){
            output += 'Fizz';
        }
        if(i%5 === 0){
            output += 'Buzz';
        }
        if(output === ''){
            console.log(i);
        }else{
            console.log(output);
        }
    }
}

fizzBuzz(); // Call the function to execute the FizzBuzz logic