// Code your solution in this file.
function lowerCaseDrivers(list) {
  a = [];
  for (const element of list) {
    a.push(element.toLowerCase())
  }
  return a;
}

function nameToAttributes(list) {
  let final = [];
  for (const element of list) {
    let first = element.split(" ")[0];
    let last = element.split(" ")[1];
    let newObj = {"firstName": first, "lastName": last};
    final.push(newObj);
  }

  return final
}

function attributesToPhrase(list) {
  let final = [];
  for (const element of list) {
    final.push(`${element.name} is from ${element.hometown}`);
  }

  return final
}
