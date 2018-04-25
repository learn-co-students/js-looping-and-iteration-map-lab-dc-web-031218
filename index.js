function lowerCaseDrivers(drivers) {
  // console.log("drivers",drivers)
  let lcDrivers = drivers.map(driver => driver.toLowerCase());
  return lcDrivers;
}

function nameToAttributes(drivers) {
  // console.log(drivers)
  let reformatted = drivers.map(name => ( {
    firstName : name.split(" ")[0],
    lastName : name.split(" ")[1]
  }));
  // console.log(reformatted)
  return reformatted;
}

function attributesToPhrase(drivers) {
  // console.log("drivers:", drivers);
  var array = []
  let reformatted = drivers.map(function(obj) {
    // `${obj['name']} is from ${obj['hometown']}`;
    array.push(obj['name'] + " is from " + obj['hometown']);
  });
  return array;
}

// `${obj[name]} is from ${obj[hometown]}`

