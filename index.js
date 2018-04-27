// Code your solution in this file.
function lowerCaseDrivers(drivers){
	return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
	const newDrivers = drivers.map(driver =>{ 
	 	return Object.assign(
			{},
			{
				firstName: driver.split(" ")[0],
				lastName: driver.split(" ")[1]
			}
			)
	});
	return newDrivers;
}

function attributesToPhrase(drivers){
	const newPhrases = drivers.map(driver =>{
		return `${driver.name} is from ${driver.hometown}`
	});
	return newPhrases;
}