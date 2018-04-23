function lowerCaseDrivers(drivers){
  // const lowerCase = drivers.map(function(driver){
  //   return Object.assign({}, driver.toLowerCase());
  // })
  // return lowerCase;
  let newArr = [];
  for(const element of drivers)
  {
    newArr.push(element.toLowerCase());
  }
  return newArr;
}



function nameToAttributes(drivers){
  const names = drivers.map(function (driver) {
      // debugger
    var temp = {
      firstName: driver.split(" ")[0],
      lastName: driver.split(" ")[1]
    }
    return temp
  })
  return names;
}
function attributesToPhrase(drivers){
  const names = drivers.map(function (driver) {
      // debugger
    var temp = `${driver.name} is from ${driver.hometown}`
    return temp
  })
  return names;
}
