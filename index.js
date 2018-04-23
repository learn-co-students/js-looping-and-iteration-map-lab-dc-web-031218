// Code your solution in this file.
const drivers = [];

function lowerCaseDrivers(drivers) {
  let lowerCaseElements = drivers.map(function(element) {
    return element.toLowerCase();
  })
  return lowerCaseElements;
}

function nameToAttributes(drivers) {
  let nameToElements = drivers.map(
    x => ({firstName: x.split(' ')[0], lastName: x.split(' ')[1]})
  )
  return nameToElements;
}

function attributesToPhrase(drivers) {
  let objectToPhrase = drivers.map(
    x => (x['name'] + ' is from ' + x['hometown'])
  )
  return objectToPhrase;
}
