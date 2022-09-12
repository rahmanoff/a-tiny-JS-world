import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const inhabitants = [
{
      species: 'dog',
      name: 'Toby',
      gender: 'male',
      legs: 4,
      hands: 0,
      saying: 'woof-woof',
      friends: ['Mary', 'John'],
      },
{
      species: 'cat',
      name: 'Alice',
      gender: 'male',
      legs: 4,
      hands: 0,
      saying: 'meow',
      friends: ['Mary', 'John'],
   },
{
      species: 'woman',
      name: 'Mary',
      gender: 'female',
      legs: 2,
      hands: 2,
      saying: 'Hi, John!',
      friends: ['John', 'Alice', 'Toby'],
   },
{
      species: 'man',
      name: 'John',
      gender: 'male',
      legs: 2,
      hands: 2,
      saying: 'Hi, Mary!',
      friends: ['Mary', 'Toby', 'Alice'],
   },
];

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

//   inhabitants.dog.species + '; ' 
//    + inhabitants.dog.name + '; ' 
//    + inhabitants.dog.gender + '; ' 
//    + inhabitants.dog.legs + '; ' 
//    + inhabitants.dog.hands + '; ' 
//    + inhabitants.dog.saying

for (let i = 0; i < inhabitants.length; i++) {
   const species = inhabitants[i].species;
   const name = inhabitants[i].name;
   const gender = inhabitants[i].gender;
   const legs = inhabitants[i].legs;
   const hands = inhabitants[i].hands;
   const saying = inhabitants[i].saying;
   const friends = inhabitants[i].friends;

   print('Inhabitant:' + species + '; Name:' + name + '; Gender:' + gender + '; Legs:' + legs + '; Hands:' + hands + '; Saying:' + saying + '; Friends:' + friends);
}