function firstNonRepeatedChar(str) {
 // Write your code here
	let uniqueCount = 1 ;
	for(let i= 0 ; i<str.length ; i++){
		for(let j = 0 ; j<str.length ; j++){
			if(str[i]==str[j]){
				if(i==j){
					continue ;
				}
				uniqueCount++
			}
		}
	}
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
