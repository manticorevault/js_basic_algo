/* 
Iteration 1: Names and Input >

1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.
*/

// Answer to 1.1
hacker1 = "Travis Bickle"
//Answer to 1.2
hacker2 = "David Freeman"

// Answer to 1.3
console.log(`The driver's name is ${hacker1}`)
// Answer to 1.4
console.log(`The navigator's name is ${hacker2}`)

/*
Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/


// Answer to 2.1
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has XX characters")

} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has XX characters") 

} else {
  console.log("Wow, you both have equally long names, XX characters!") 
}

/*
Iteration 3: Loops

3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

// Answer to 3.1
driverSplit = hacker1.split('');
driverJoin = driverSplit.join(" ").toUpperCase();
console.log (driverJoin);

// Answer to 3.2
navigatorSplit = hacker2.split('');
navigatorReverse = navigatorSplit.reverse();
navigatorJoin = navigatorReverse.join('');
console.log(navigatorJoin);

//Answer to 3.3

if(hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
} 

/*
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/



/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

// Answer to Bonus 2:

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

str = "Was it a car or a cat I saw?"

if(palindrome(str) === true) {
  console.log("It is a palindrome!")
} else {
  console.log("It is not a palindrome...")
}