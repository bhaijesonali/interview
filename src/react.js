// Any other storage instead of local storage and session storage ?
// Difference between for loop and forEach method
// Promise chain
// Call back function
// prototype chain
// What is the difference between Call, Apply and Bind
// Function Currying
// What is hoisting?
// Temporal dead zone
// What are Closures
// What is web storage?
// what is time complexity
// event loop in javascript
// What is promise
// Static methods of promise
// Difference between forEach  vs map
// what happens when we hit the url of any website


// / #1 Any other storage instead of local storage and session storage ?

// IndexedDB: IndexedDB is a more powerful and feature-rich client-side database system. It provides a structured, transactional storage mechanism that allows you to store larger amounts of structured data, perform advanced queries, and work with indexes. IndexedDB is well-suited for applications that require complex data storage and retrieval, such as offline web apps or applications dealing with large datasets.

// Cookies: Cookies are small pieces of data that are stored on the user's browser. They have limited storage capacity (typically a few kilobytes) and are primarily used for storing small amounts of data that need to be sent to the server with every request. Cookies can be set with an expiration date, allowing them to persist across sessions, or they can be session cookies that are removed when the browser is closed. However, cookies have some limitations, such as size constraints and being sent with every request, which can impact performance.

// #2 Difference between for loop and forEach method

//1
// for loop: A for loop does not have an implicit return value. You can manually specify a return value based on your specific requirements.

// forEach method: The forEach method does not return a new array. It iterates over the existing array and performs an action on each element.

//2
// for loop: It can be used to iterate over any iterable, including arrays, strings, and objects. It provides greater flexibility and control over the iteration process. You can break or continue the loop based on conditions, modify the looping variable, or perform more complex logic within the loop.

// forEach method: It is specifically designed for iterating over arrays. It automatically iterates through each element of the array and executes the provided callback function for each element. The forEach method does not support breaking or continuing the loop, and it does not provide access to the current index of the iteration.

// typeof undefined==typeof null

// The comparison typeof undefined == typeof null in JavaScript will evaluate to true.

// The typeof operator in JavaScript returns a string indicating the type of the operand.

// The typeof undefined expression returns the string "undefined".
// The typeof null expression returns the string "object".
// So, when comparing the two using the equality operator ==, which performs type coercion, the strings "undefined" and "object" are considered equal, resulting in true.

// However, it's important to note that null and undefined are distinct values in JavaScript and represent different concepts. null is an assignment value that represents the intentional absence of any object value, while undefined indicates the absence of a value or the uninitialized state of a variable.

// #3 Promise chain

// A promise chain in JavaScript refers to a series of promises that are chained together using the then() method. Promises provide a way to handle asynchronous operations and enable a more organized and readable flow of asynchronous code.

// Here's an example of a promise chain:

const arr = [];
fetch("https://dummyjson.com/products") // Initial asynchronous operation (e.g., fetching data)
  .then((response) => {
    // Handle the response
    return response.json();
  })
  .then((data) => {
    // Process the data
    arr.push(data);
  })
  .then(() => {
    // Use the processed data
    arr.map((x) => {
      console.log(x);
    });
  })
  .catch((error) => {
    // Handle any errors that occurred in the chain
    console.error("Error:", error);
  });

//   Promise chains help avoid callback hell and make asynchronous code more manageable and readable. They allow for a more linear and expressive coding style, improving code organization and maintainability.

// #4 Call back function

// A callback function in JavaScript is a function that is passed as an argument to another function and is intended to be called later in the execution flow. The purpose of using a callback function is to ensure that certain code is executed only after a specific task or operation has been completed.

function fetchData(url, callback) {
  // Simulating an asynchronous operation, such as fetching data from an API
  setTimeout(() => {
    fetch("https://dummyjson.com/products") // Initial asynchronous operation (e.g., fetching data)
      .then((response) => {
        // Handle the response
        return response.json();
      })
      .then((data) => {
        // Process the data
        callback(data);
      });
  }, 2000);
}

function processData(data) {
  console.log("Data:", data);
}

fetchData("https://dummyjson.com/products", processData);

// #5 prototype chain

// In JavaScript, the prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal property called [[Prototype]] (often referred to as "dunder prototype") that points to its prototype object.

// When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. If it doesn't find it, it continues searching for the property or method in the prototype object referenced by the [[Prototype]] property. This process continues up the prototype chain until the property or method is found or until the end of the chain is reached (where the [[Prototype]] is null).

// Define a parent object
const parent = {
  parentProperty: "I am from the parent object",
};
console.log(parent.parentProperty);

// Create a child object that inherits from the parent object
const child = Object.create(parent);
child.childProperty = "I am from the child object";

// Access properties
console.log(child.childProperty); // Output: I am from the child object
console.log(child.parentProperty); // Output: I am from the parent object

// Modify properties
child.childProperty = "Modified child property";
console.log(child.childProperty); // Output: Modified child property

// Add new properties
child.newProperty = "New property added";
console.log(child.newProperty); // Output: New property added

console.log(parent);
console.log(child);

// #6 What is the difference between Call, Apply and Bind

// The key difference between call and apply is how the arguments are passed: call accepts arguments individually, while apply accepts them as an array. bind creates a new function with a bound context and optional pre-filled arguments.

var student1 = { firstName: "Devendra", lastName: "Bhaije" };
var student2 = { firstName: "John", lastName: "Snow" };

function message(msg1, msg2) {
  console.log(`${msg1} ${this.firstName} ${this.lastName}, ${msg2}`);
}

//1 Call

// The call method is useful when you want to invoke a function with a specific object as the execution context (the value of this) and pass individual arguments to the function. It provides control over the value of this inside the function, allowing you to reuse functions with different objects as their context.

message.call(student1, "Hello", "How are you ?");
message.call(student2, "Hello", "How are you ?");

//2 Apply

// The apply method is useful when you want to invoke a function with a specific object as the execution context (the value of this) and pass arguments as an array or array-like object. It provides flexibility in accepting dynamic or variable-length arguments.

message.apply(student1, ["hey !", "Are you available?"]);
message.apply(student2, ["hey !", "Are you available?"]);

//diff between call and apply

// call: Use call when you know the exact number and values of the arguments you want to pass to the function.

// apply: Use apply when you have the arguments in an array or an array-like object, or when the number of arguments may vary or is not known in advance.

//3 Bind
// In JavaScript, the bind method is available on function objects and is used to create a new function with a specified this value and optionally pre-filled arguments. The bind method returns a new function that, when invoked, has the bound this value and any specified arguments.

var bind1 = message.bind(student1);
var bind2 = message.bind(student2);

bind1("Good morning", "Have a nice day");
bind2("Good morning", "Have a nice day");

// Function Currying

// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The currying process allows you to create specialized functions by partially applying the arguments one at a time.

const add = (a) => (b) => (c) => console.log(a + b + c);

// function add(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }

// Curried function usage

add(4)(5)(6);

// or

const first = add(4);
const second = first(5);
const third = second(6);

// #7 What is hoisting?

// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.Remember that JavaScript only hoists declarations, not initialisation. This is happening because function and variable declarations are added to memory during the compile phase.

//example 1
//written code
console.log(d);
var d = 10;

//behaves as
var d;
console.log(d);
d = 10;

//example 2
//written code
console.log(val); //undefined
var val;

//behaves as
var val;
console.log(val); //undefined

//example 3
//written code
// console.log(store);  //Reference Error
// let store

// //behaves as
// let store
// console.log(store);  //Reference Error

// In the above example, the variable val is hoisted, so the first console.log statement outputs undefined. However, the variable store is hoisted as well, but since it is declared using let, accessing it before its actual declaration throws a ReferenceError due to the "temporal dead zone".

// Function Hoisting:
// Function declarations are completely hoisted, including both the function name and its implementation. This means that you can call a function before its actual declaration in the code.

//Function declarations
greet();
function greet() {
  console.log("function greet called");
}

// Function expressions, such as those assigned to variables, are not hoisted in the same way. Only the variable declaration is hoisted, but the assignment (function expression) is not. Function expressions must be defined before they are called.

//Function expressions
// greeting()
// const greeting =function (){
//     console.log("function greeting called")
// }

// #8 Temporal dead zone

// The "temporal dead zone" (TDZ) is a concept in JavaScript that refers to the period between the creation (hoisting) of a variable with let or const and its actual declaration. During this period, accessing the variable results in a ReferenceError because the variable exists but is not yet initialized.

// In JavaScript, variables declared with let and const have block scope and are hoisted to the top of their respective scopes, similar to variables declared with var. However, unlike var, let and const variables are not initialized with a default value (undefined) during the hoisting process. Instead, they remain in an uninitialized state until their actual declaration is encountered in the code. This period, from the start of the block until the variable is declared, is known as the temporal dead zone.

// During the temporal dead zone, any attempt to access the variable will result in a ReferenceError. This is done to catch potential errors caused by using variables before they are properly declared and initialized. Once the variable declaration is reached in the code, the variable is initialized and can be accessed normally.

// Here's an example that demonstrates the temporal dead zone:

// console.log(b); // Throws ReferenceError
// let b = 10;

// In the above example, the variable myVariable is accessed before its actual declaration, resulting in a ReferenceError due to the temporal dead zone. If we move the console.log statement after the declaration, it will work as expected:

let a = 10;
console.log(a); // Output: 10

// To avoid issues related to the temporal dead zone, it is considered good practice to declare variables with let and const at the beginning of their respective scopes. This ensures that variables are properly initialized before they are used within the code.

// #9 What are Closures

// A Function with its lexical Scope is called as closure.
// OR
// A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables.

// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration

function outer() {
  let name = "outer function variable";

  function inner() {
    return `${name} in inner function accessed`;
  }
  return inner;
}
const outerFn = outer();
console.log(outerFn());

//data privacy in closures

// In JavaScript, variables declared within an outer function are not directly accessible from outside the function. However, inner functions declared within the outer function have access to the variables in their parent scopes, including the outer function's variables. This forms the basis for creating private variables and achieving data privacy using closures.

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.increment(); // Output: 3
counter.decrement(); // Output: 1

// #10  What is web storage?

// Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies.
// The web storage provides two mechanisms for storing data on the client.
// i. Local storage: It stores data for current origin with no expiration date.
// ii. Session storage: It stores data for one session and the data is lost when the browser tab is closed.

//15.Difference between cookie, local storage and session storage?
// Below are some of the differences between cookie, local storage and session storage,

// Feature
// 1.Accessed on client or server side
// 2.Lifetime
// 3.SSL support
// 4.Maximum data size

// Cookie
// 1.Both server-side & client-side
// 2.As configured using Expires option
// 3.Supported
// 4.4KB

// Local storage
// 1.client-side only
// 2.until deleted
// 3.Not supported
// 4.5MB

// Session storage
// 1.client-side only
// 2.until tab is closed
// 3.Not supported
// 4.5MB

//SSL is used to secure communication between a web browser and a web server.
// This turns a website's address from HTTP to HTTPS, the 'S' standing for 'secure'.

// #11 what is time complexity

// Time complexity is a concept used in computer science to describe the amount of time an algorithm takes to run as a function of the input size. It measures how the algorithm's performance scales with increasing input size.

// Time complexity is typically expressed using Big O notation, which provides an upper bound on the growth rate of an algorithm. It describes the worst-case scenario in terms of the number of operations an algorithm needs to perform relative to the input size.

// Common time complexity notations include:

// O(1) or constant time: The algorithm takes a constant amount of time regardless of the input size. It has a fixed execution time.
// O(log n) or logarithmic time: The algorithm's execution time increases logarithmically with the input size. Examples include binary search algorithms.
// O(n)
//  or linear time: The algorithm's execution time scales linearly with the input size. As the input doubles, the execution time doubles as well.
// O(n log n) or linearithmic time: The algorithm's execution time is a product of the input size and the logarithm of the input size.
// O(n^2) or quadratic time: The algorithm's execution time grows quadratically with the input size. It often occurs in nested loops.
// O(2^n) or exponential time: The algorithm's execution time doubles with each additional input element. It often occurs in brute-force algorithms.
// O(n!) or factorial time: The algorithm's execution time grows factorially with the input size. It occurs in algorithms that generate all permutations or combinations.
// Time complexity analysis helps in understanding how an algorithm's performance scales with different input sizes and allows us to choose more efficient algorithms for specific problems. It provides a theoretical understanding of an algorithm's efficiency, allowing us to compare and select the best algorithm for a given task.

// #12 event loop in javascript

// The event loop is a fundamental concept in JavaScript that handles the asynchronous execution of code and ensures the responsiveness of web applications. It is responsible for processing and dispatching events, executing callbacks, and managing the execution context. Here's an overview of how the event loop works:

//1 Event Loop Basics:

// JavaScript is a single-threaded language, meaning it has only one main thread of execution.
// The event loop is a mechanism that allows JavaScript to handle asynchronous operations efficiently without blocking the main thread.

//2 Call Stack:

// The call stack is a data structure that keeps track of the execution context (function calls) in a stack-like manner.
// Whenever a function is called, its execution context is pushed onto the call stack, and when the function completes, its context is popped from the stack.

//3 Web APIs and Callback Queue:

// JavaScript runtime environments, such as web browsers, provide Web APIs (e.g., setTimeout, fetch) that handle asynchronous operations.
// When an asynchronous operation is encountered, it is offloaded to the Web API, and a callback function is registered to be executed later.
// The callback functions are placed in a callback queue (also known as the task queue or message queue) once they are ready to be executed.

//4 Event Loop Phases:

// The event loop consists of several phases: the call stack, microtask queue, and task queue (callback queue).
// The event loop continuously checks the state of the call stack and processes tasks in a specific order.

//5 Microtask Queue:

// Microtasks are tasks that have higher priority than regular tasks in the event loop.
// Promises, mutation observers, and certain APIs, like queueMicrotask, add microtasks to the microtask queue.
// Microtasks are executed immediately after the current task completes, before the next task is picked from the task queue.

//6 Event Loop Flow:

// The event loop starts by processing the call stack.
// Once the call stack is empty, the event loop checks the microtask queue and executes all the microtasks until the queue is empty.
// After processing all the microtasks, the event loop checks the task queue and executes the oldest task (callback) in the queue.
// This process continues in a loop, alternating between processing microtasks and tasks from the queues.

// By following this flow, the event loop ensures that asynchronous operations are executed in a timely manner while allowing the main thread to handle other tasks. It helps prevent blocking and keeps the JavaScript runtime responsive to user interactions and other events.

// It's important to note that a deep understanding of the event loop is crucial for writing efficient and responsive JavaScript code, especially when dealing with asynchronous operations, promises, and callbacks.

// #13 What is promise

// A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more organized and manageable way, making it easier to work with asynchronous code and avoid the callback hell.

// A Promise has three possible states:

// Pending: The initial state of a Promise. It is neither fulfilled nor rejected.

// Fulfilled: The state of a Promise when the asynchronous operation completes successfully. In this state, the Promise has a resolved value associated with it.

// Rejected: The state of a Promise when the asynchronous operation encounters an error or fails. In this state, the Promise has a reason for rejection associated with it.

// A Promise constructor takes a function as an argument, known as the executor function. The executor function receives two callback functions as parameters: resolve and reject. Inside the executor function, you perform the asynchronous operation, and when it completes, you call resolve with the resolved value or reject with the reason for rejection.

const fetchDataPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = fetch("https://dummyjson.com/products");
    // Resolve the Promise with the data
    resolve(data);
    // or reject the Promise with an error
    // reject(new Error('Failed to fetch data'));
  }, 2000);
});

// Consuming the Promise using .then() and .catch()
fetchDataPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//#14 Static methods of promise

// 1 Promise.all(iterable):

// Promise.all() can be used to handle multiple Promises concurrently, perform parallel computations, fetch multiple resources, or handle errors in a streamlined manner. It waits for all Promises to resolve or rejects if any Promise rejects, allowing you to synchronize and process the results efficiently.

// Accepts an iterable (e.g., an array) of Promises as input.
// Returns a new Promise that resolves when all Promises in the iterable have resolved, or rejects if any of the Promises reject.
// The resolved value is an array of the resolved values from each Promise, in the order of the original iterable.

// 2 Promise.race(iterable):

// Promise.race() is commonly used when you want to observe the result of multiple asynchronous operations but only need the fastest one or want to implement a timeout mechanism. It allows you to race multiple Promises against each other and handle the result of the first settled Promise.

// Accepts an iterable (e.g., an array) of Promises as input.
// Returns a new Promise that resolves or rejects as soon as any Promise in the iterable resolves or rejects.
// The resolved/rejected value of the first resolved/rejected Promise is used as the resolved/rejected value of the returned Promise.

// 3 Promise.resolve(value):

// Promise.resolve() is a static method of the Promise object in JavaScript. It returns a new Promise object that is resolved with a given value or another Promise.

// Creates a resolved Promise with the given value.
// If the provided value is already a Promise, it is returned as is.
// Useful for converting non-Promise values into Promises.

// 4 Promise.reject(reason):

// Promise.reject() is a static method of the Promise object in JavaScript. It returns a new Promise object that is rejected with a given reason.

// Creates a rejected Promise with the given reason.
// Useful for explicitly creating a rejected Promise.

// 5 Promise.allSettled(iterable)

// The Promise.allSettled() method is a static method of the Promise object in JavaScript. It takes an iterable (e.g., an array) of Promises as input and returns a new Promise that is fulfilled with an array of objects representing the outcome of each Promise in the iterable, regardless of whether they fulfill or reject.

//6 Promise.any(iterable):

// The Promise.any() method is a static method of the Promise object in JavaScript. It takes an iterable (e.g., an array) of Promises as input and returns a new Promise that is fulfilled with the first fulfilled Promise from the iterable.
//  If all Promises in the iterable reject, the returned Promise is rejected with an AggregateError containing all the rejection reasons.

//1 Promise.all

// a) fetching multiple url

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/users",
];

const promises = urls.map((url) => fetch(url).then((res) => res.json()));

Promise.all(promises)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });


//b performing parallel computations

const calculations = [computeAsync(1), computeAsync(2), computeAsync(3)];

Promise.all(calculations)
    .then((results) => {
        console.log("Results:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

function computeAsync(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, Math.random() * 1000);
    });
}

//c handling errors

//Handling Multiple Requests with Error Handling:
const promiseUrl = [
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
    fetch("https://jsonplaceholder.typicode.com/users"),
];

Promise.all(promiseUrl)
    .then((responses) => {
        // console.log(responses);
        const results = responses.map((response) => {
            if (!response.ok) {
                throw new Error("Request failed");
            }
            return response.json();
        });
        return Promise.all(results);
    })
    .then((data) => {
        // Process the data from all successful requests
        console.log(data);
    })
    .catch((error) => {
        // Handle the first encountered error
        console.log("Error:", error);
    });

//Handling Errors and Returning Partial Results:
const promisesHandleUrl = [
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
    fetch("https://jsonplaceholder.typicode.com/users"),
];

Promise.all(promisesHandleUrl.map((p) => p.catch((error) => error))).then(
    (results) => {
        const successfulResults = results.filter(
            (result) => !(result instanceof Error)
        );
        const failedResults = results.filter((result) => result instanceof Error);
        console.log("Successful Results:", successfulResults);
        console.log("Failed Results:", failedResults);
    }
);

//for statements
const promisesError = [
    Promise.resolve("Success"),
    Promise.reject(new Error("Error 1")),
    Promise.resolve("Another success"),
    Promise.reject(new Error("Error 2")),
];

Promise.all(promisesError)
    .then((results) => {
        console.log("Results:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

//2 Promise.race

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Resolved 1");
    // setTimeout(resolve, 3000, "Resolved 1");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Resolved 2");
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1500, "Rejected 3");
});

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

//Promise.resolve

const existingPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Existing promise resolved");
});

const promise = Promise.resolve(existingPromise);
promise.then((result) => {
    console.log(result); // Output: Existing promise resolved
});

//Promise.reject

const error = new Error("Custom error");
const promiseErr = Promise.reject(error);
promiseErr.catch((error) => {
    console.log(error.message); // Output: Custom error
});

//Promise.allSettled

const promise10 = Promise.resolve("Resolved 1");
const promise20 = Promise.reject("Rejected 2");
const promise30 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Resolved 3");
});

Promise.allSettled([promise10, promise20, promise30]).then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Fulfilled:", result.value);
        } else if (result.status === "rejected") {
            console.log("Rejected:", result.reason);
        }
    });
});

//Promise.any

const promise100 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "Rejected 1");
});

const promise200 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Fulfilled 2");
    // setTimeout(reject, 1000, 'Rejected 3');
});

const promise300 = new Promise((resolve, reject) => {
    setTimeout(reject, 1500, "Rejected 3");
});

Promise.any([promise100, promise200, promise300])
    .then((result) => {
        console.log("Fulfilled:", result);
    })
    .catch((error) => {
        console.log("All Promises rejected:", error);
    });

// #15 Difference between forEach  vs map

// The forEach and map methods are both array methods in JavaScript used to iterate over arrays and perform operations on each element. However, they have some key differences in terms of their behavior and return values. Here's a breakdown of the differences between forEach and map:

// Purpose:

// forEach: The forEach method is used to iterate over each element in an array and perform a provided callback function on each element. It is primarily used for side effects, such as logging values or modifying the original array.
// map: The map method is used to create a new array by applying a provided callback function to each element of the original array. It transforms each element and returns a new array of the same length.

// Return Value:

// forEach: The forEach method does not return a value. It simply iterates over the array and applies the provided callback function to each element. It is used for its side effects and does not generate a new array.
// map: The map method returns a new array containing the results of applying the provided callback function to each element of the original array. It creates a new array with the same length as the original, where each element is the result of the callback function.

// Usage:

// forEach: forEach is useful when you want to perform a side effect or mutation on each element of the array, such as logging values, modifying the original array, or executing other actions without the need to create a new array.
// map: map is useful when you want to transform each element of an array and create a new array with the transformed values. It is commonly used when you need to perform operations on each element and generate a new array based on those transformed values.

// #16 what happens when we hit the url of any website?

// When you hit the URL of a website in your web browser, several steps are involved in loading and displaying the website. Here's a high-level overview of what happens:

// DNS Resolution: The browser begins by resolving the domain name of the website you entered into an IP address. It sends a DNS (Domain Name System) request to a DNS server to obtain the IP address associated with the domain.

// Establishing a TCP Connection: Once the browser has obtained the IP address, it establishes a TCP (Transmission Control Protocol) connection with the web server that hosts the website. This involves a three-way handshake process to establish a reliable connection.

// Sending an HTTP Request: After the TCP connection is established, the browser sends an HTTP (Hypertext Transfer Protocol) request to the web server. The request includes the specific resource (web page, image, etc.) being requested and other relevant information.

// Processing the Request on the Server: The web server receives the HTTP request and processes it. It may perform various tasks such as retrieving data from a database, executing server-side code, or accessing files on the server.

// Generating a Response: The web server generates an HTTP response based on the requested resource. The response typically includes the requested data, along with an appropriate status code indicating the success or failure of the request.

// Sending the Response: Once the server generates the response, it sends it back to the browser over the established TCP connection. The response includes the HTML, CSS, JavaScript, and any other assets needed to render the web page.

// Rendering the Web Page: The browser receives the response and starts rendering the web page. It parses the HTML, applies the CSS styles, executes JavaScript code, and renders the content on the screen. This process involves building the Document Object Model (DOM) and rendering the page layout.

// Additional Requests: While rendering the web page, the browser may encounter additional resources referenced within the HTML, such as images, stylesheets, or scripts. It sends separate HTTP requests for each of these resources to the server, following a similar process as described above.

// Displaying the Web Page: Once all the resources are received and processed, the browser displays the fully rendered web page to the user. The user can interact with the page, click on links, submit forms, and perform other actions.

// It's important to note that this is a simplified overview, and there are additional details and optimizations involved in the process. The specific steps and details can vary depending on factors like caching, content delivery networks (CDNs), encryption (HTTPS), and server-side technologies.

// #17 how setTimeout work in internally

// The setTimeout function in JavaScript is used to schedule the execution of a function or the execution of a piece of code after a specified delay. Internally, setTimeout works by utilizing the JavaScript event loop and timers.

// Here's an overview of how setTimeout works internally:

// When you call setTimeout and provide a callback function and a delay, a timer is created by the browser or JavaScript engine.

// The timer is set to run after the specified delay, which is typically measured in milliseconds.

// Meanwhile, the rest of the code continues to execute, and the event loop keeps running.

// After the specified delay has passed, the timer expires, and the callback function is added to the event queue.

// The event loop continuously checks the event queue for any pending events or callbacks.

// When the event loop finds the callback function in the event queue, it moves the callback function to the call stack for execution.

// The callback function is executed, and any code inside it is processed.

// It's important to note that the exact implementation of setTimeout may vary slightly depending on the JavaScript environment. For example, in a web browser, the browser's rendering engine manages the timers. In Node.js, timers are managed by the underlying V8 JavaScript engine.

// It's also worth mentioning that the actual execution time of the callback function in setTimeout may vary. It depends on factors such as the current workload of the JavaScript runtime and the availability of system resources. Therefore, the delay specified in setTimeout should be treated as a minimum delay, not an exact guarantee of when the callback will execute.


//NOTE:
// 1. All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.
// 2.The “this” keyword refers to the object that the function is a property of.



