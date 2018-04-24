// Code your solution in this file.
function lowerCaseDrivers(arr){
	return arr.map(name => name.toLowerCase());
}

// function lowerCaseDrivers(arr){
// 	return arr.map(
// 		function(name){
// 			return name.toLowerCase();
// 		}
// 	)
// }

function nameToAttributes(arr){
	return arr.map(name =>
		{
			nameArr = name.split(" ");
			return Object.assign({}, {firstName: nameArr[0]}, {lastName: nameArr[1]});
		}
	);
}


// function nameToAttributes(arr){
// 	return arr.map(
// 	function(name){
// 		nameArr = name.split(" ");
// 		return Object.assign({}, {firstName: nameArr[0]}, {lastName: nameArr[1]});
// 	});
// }

function attributesToPhrase(arr){
	return arr.map(obj =>
		`${obj.name} is from ${obj.hometown}`
	);

}