/*
1. Create an object called person.
2. person has the following key-value pairs / properties: name and age. Fill in you own name and age.
3. Use console.log(person) and run your JavaScript program, to log your object.

let person = {
    name: 'Yasin',
    age: 29
};

*/

/*
4. Only log the value of name using the key name.

let person = {
    name: 'Yasin',
    age: 29
};

console.log(person.name);
*/

/*
5. Only log age age.

let person = {
    name: 'Yasin',
    age: 29
};

console.log(person.name);
*/


//6. Use dot-notation and bracket-notation to log the two properties above.

/*
let person = {
    name: 'Yasin',
    age: 29
};

console.log(person.name);
console.log(person.age);
*/

//7. Create a final key-value pair in which the key is evaluations and the value [7, 10, 9]. These are the marks you've received in the past year.



//PART2: Arrays......................................................................................................................................

//1.Create a new variable containing an empty array [].

/*
let selectedColors = []
*/

//2.Fill this array with at least three different colors in the form of strings. For example: "green", "blue", "red".

/*
let selectedColors = ['Green', 'red', 'blue']
*/

//3.Log your new array to the console.

/*
let selectedColors = ['Green', 'red', 'blue']

console.log(selectedColors);
*/

//4.Log the length of your array to the console. Use array.length

/*
let selectedColors = ['Green', 'red', 'blue']

console.log(selectedColors.length);
*/

//5.Log the first element of your array to the console. In our example, this would be "green".

/*
let selectedColors = ['Green', 'red', 'blue']

console.log(selectedColors[0]);
*/

//6.Log the last element of your array to the console, in our example: "red". Assume the amount of elements in your array is unknown. array[3] will not give the correct result if later on five elements are contained within the array.

/*
let selectedColors = ['Green', 'red', 'blue']

console.log(selectedColors[1]);
*/

//7.Add a 4th element to your array using the push method: array.push(). The result will be something like: ["green", "blue", "red", "Yellow"]

/*
let selectedColors = ["green", "blue", "red", "Yellow"]

console.log(selectedColors);
*/

//8.Now add a digit to your array using the push method. Result: ["green", "blue", "red", "Yellow", 5]

/*
let selectedColors = ["green", "blue", "red", "Yellow", 5]

console.log(selectedColors);
*/

//9.Finally add an object to your array, again with the push method. The object is as follows: {greeting: "hi, I am an object"}. Result: ["green", "blue","red", "Yellow", 5, {greeting: "hi, I am an object"}]

/*
let selectedColors = ["green", "blue", "red", "Yellow", 5, { greeting: "hi, I am an object" }]

console.log(selectedColors);
*/

//10.Log Only the greeting from the object (last element of your array), to the console.

/*
let selectedColors = ["green", "blue", "red", "Yellow", 5, { greeting: "hi, I am an object" }]

console.log(selectedColors[5]);
*/

//Part 3: A "real-life" object...........................................................................................................................

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]



//1.Log the name of the last cat breed.Name cat breed 3: American Bobtail

/*
console.log(catBreeds[2].name)
*/


//2.Log the energy level of the first cat breed.Energy level cat breed 1: 5

/*
console.log(catBreeds[0].energy_level)
*/

//3.Log the first temperament of the temperaments of the second cat breed.First temperament cat breed 2: Affectionate

/*
console.log(catBreeds[1].temperament[0])
*/

//4.Log the last temperament of the temperaments of the third cat breed. Last temperament cat breed 3: Sensitive

/*
console.log(catBreeds[2].temperament[4])
*/

//5.Log the favorite food of the third cat breed.Favorite food cat breed 3: meaty things

/*
console.log(catBreeds[2].favourite_food)
*/