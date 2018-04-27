// Code your solution in this file.
function lowerCaseDrivers(drivers){
	return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
	let newDrivers = drivers.map(function(driver){
		return Object.assign({}, driver,{ firstName: driver, lastName: driver });
		}
	newDrivers = newDrivers.map(driver => driver.firstName = driver[0][0]);
	newDrivers = newDrivers.map(driver => driver.lastName = driver[0][1] );
	return newDrivers;
}

function attributesToPhrase(){
	
}