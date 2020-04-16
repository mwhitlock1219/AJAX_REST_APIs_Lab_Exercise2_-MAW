//Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.

function textNum(number){
	return new Promise(function(resolve,reject){
		if((number < 50) || (number > 50)){
			resolve(number);
		} else {
			reject(number);
		}
	})
}


