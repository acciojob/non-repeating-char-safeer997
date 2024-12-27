function firstNonRepeatedChar(str) {
 // Write your code here
	
	let uniqueElement = str[0]
	for(let i= 0 ; i<str.length ; i++){
		let uniqueCount = 1 ;
		for(let j = 0 ; j<str.length ; j++){
			if(str[i]==str[j]){
				if(i==j){
					continue ;
				}
				uniqueCount++
			}
		}
		if(uniqueCount>1){
			uniqueElement = str[i] ;
		}else if(uniqueCount==1){
				uniqueElement = null
		}
	}
	return uniqueElement ;
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
