
const users = [
    { id: 1, name: 'Alice', isActive: true, age: 30 },
    { id: 2, name: 'Bob', isActive: false, age: 25 },
    { id: 3, name: 'Cara', isActive: true, age: 28 },
    { id: 4, name: 'Daniel', isActive: false, age: 35 },
];


users.sort((a, b) => a.age < b.age ? -1 : 1);

const forArray = [];
// ------------------- First Solution -------------------
for(let i = 0; i < users.length; i++){
    if(users[i].isActive){
        forArray.push(users[i].name);
    }
}

console.log("forArray: ", forArray, "");
console.log();

// ------------------- Second Solution -------------------
const forEachArray = [];
users.forEach(user => {
  if (user.isActive) forEachArray.push(user.name);
});
console.log("forEachArray: ", forEachArray, "");
console.log();

// ------------------- Second Solution -------------------

const mapArray = users.filter(u => u.isActive).map(user => user.name);
console.log("mapArray: ", mapArray, "");