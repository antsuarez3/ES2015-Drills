// Template literals and default parameters Value //
let favMovie = (movie = "The Room", name = "Tommy Wiseau") =>
  `my name is ${name} and my favorite movie is ${movie}`;

let sum = favMovie(); // favMovie undefined!
console.log(sum);
//favMovie('Avengers: Endgame');

let getFirstName = (fullName) => {
  let words = fullName.split(" ");
  console.log(words[0]);
};

getFirstName("Anthony Suarez");


// let p1 = {
//   initialName: 'Bic',
//   secondaryName: 'Mitchum'
// }

let getFirstNameConcise = (person) => {
  let names = person.split(' ');
  console.log(names[0]);

  // return `${person.initialName} ${person.secondaryName}`;
};

let result = getFirstNameConcise('Bic Michum');
//console.log(result[0]);



let doMath = (x, y) => {
  let numbers = {
    exponent: x ** y,
    product: x * y
  };

  console.log(`Exponent: ${numbers.exponent} Product: ${numbers.product}`)
}

doMath(5, 4);

let arr = ['Anthony', 'Opelika', 'Steak'];

let myFunc = (name, location, favFood) => {
  console.log(`Name: ${name} Location: ${location} Food: ${favFood}`)
};

myFunc(...arr);

let myName = 'Chico';

let lilMan = (chi) => {
  let spread = [...chi];
  console.log(spread);

  for (let i = 0; i < spread.length; i++) {
    console.log(spread[i]);
  }
}

lilMan(myName);