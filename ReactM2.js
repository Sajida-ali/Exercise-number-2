//fun with arrays
//q1:
const one=[]
one.fill("1",0,99)

//q2:
Array.from({length: 100}, (_, i) => i + 1)

//q3:
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const propertyNames = Object.keys(person);
console.log(propertyNames);//--> [ 'firstName', 'lastName' ]

//q4:
const arr = ['zero', 'one', 'two'];

const obj1 = Object.assign({}, arr);
console.log(obj1); // --> {0: 'zero', 1: 'one', 2: 'two'}

//q5:
const result = Array.isArray(arr);
console.log(result);

//q6.1:
const x = ["aaa", "bbb", "ccc"];
const y = [...x];

//q6.2:
const a = ["aaa", "bbb"];
const b = a;
b.push('ccc');
console.log(b);
// ["aaa", "bbb", "ccc"]
console.log(a);
// ["aaa", "bbb", "ccc"]


//---------------------------------------------
//massaging data with map
//q1:
data.map((d) => d.name);
function getAllNames(data) {
    return data.map(d => d.name);
  }
console.log(getAllNames(data));

  
//q2:
const d = data.map((person) => {
    const birthYear = person.birthday.split("-")[2];
    return birthYear < 1990 ? person : null;
  }).filter((person) => person !== null);
  
  console.log(d);

  
//q3:
function countFoods(data) {
    const foods = {};
    data.map(person => Object.values(person.favoriteFoods))
        .reduce((acc, curr) => acc.concat(curr), [])
        .forEach(foodType => foodType.forEach(food => {
            if (foods[food]) {
              foods[food]++;
            } else {
              foods[food] = 1;
            }
        }));
    return foods;
  }

const foodCounts = countFoods(data);
console.log(foodCounts);


  