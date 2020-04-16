//Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.

//********* ORIGINAL ATTEMPT---> did not work :( ******************

// function textNum(number){
// 	return new Promise(function(resolve,reject){
// 		if((number < 50) || (number > 50)){
// 			resolve(number);
// 		} else {
// 			reject(number);
// 		}
// 	})
// }

function compareToTen(num){
	p = new Promise(function(resolve,reject){
		if(num > 50){
			resolve(num + " is greater than 50, success!")
		} else {
			reject(num + " is less than 50, fail!")
		}
	})
	return p
}

//how to call the function
compareToTen(55)
	.then(result => console.log(result))
	.catch(error => console.log(error))

compareToTen(8)
	.then(result => console.log(result))
	.catch(error => console.log(error))