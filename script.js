// Q1:
// Problem: Given an array of numbers, use the map function with an arrow function to square each element of the array.
const number= [1, 2, 3, 4, 5];
const squares = number.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]


// Q2:
// Problem: Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.
const getGrade = (score) => {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
  };
  
  console.log(getGrade(85)); // Output: B

//   Q3:
//   Problem: Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
const car = {
    company: 'Toyota',
    model: 'Camry',
    year: 2020
  };
  
  const changeYear = (newYear) => {
    car.year = newYear;
  };
  
  const { model, year } = car;
  console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2020
  
  changeYear(2022);
  console.log(`Updated Year: ${car.year}`); // Output: Updated Year: 2022
  

//   Q4:
//   Problem: Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = numbers.filter(isPrime);
  console.log(primeNumbers); // Output: [2, 3, 5, 7]

  
//   Q5:
//   Problem: State different use cases of map, filter, and reduce functions.
  
//   map: Used to apply a function to every element in an array and return a new array with the transformed values.
//   filter: Used to filter out elements from an array based on a condition.
//   reduce: Used to accumulate a result from all elements of an array (e.g., summing all numbers in an array).

// Q6:
// Problem: Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();

// Q7:
// Problem: Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
const person = {
    name: 'John',
    address: {
      city: 'New York',
      street: '5th Avenue'
    }
  };
  
  const phoneNumber = person?.contact?.phone;
  console.log(phoneNumber); // Output: undefined (no error thrown due to optional chaining)
  