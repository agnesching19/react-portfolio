var nameVar = 'Agnes';
var nameVar = 'Simon';
console.log('nameVar', nameVar);

let nameLet = 'Bob';
nameLet = 'Kevin';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Doggie';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Agnes Ching';
let firstName;

if (fullName) {
  let fistName = fullName.split(' ')[0];
  console.log(fistName);
}

console.log(fistName);
