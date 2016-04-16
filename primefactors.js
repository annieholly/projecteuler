// //The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


var primeArray = [];


var num = 99; 

for (var i = 1; i < num; i++) {
		
		if (i % 2 === 0) {
			
		}
		
		else if (num % i === 0) {
		
			
				for (var i2 = 0; i2 < i; i2++) {
					
					if (i % i2 === 0) {
						
						
					}
					
					else {
						
						primeArray.push(i);
						
					}
					
				}	
		
		
		}
		
		
}

console.log(primeArray);
