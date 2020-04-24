let variable = 12;

let myVariable = false;
if (myVariable === true) {
    console.log(myVariable + ' has been evaluated to true');
} else {
    console.log(myVariable + ' has been evaluated to false');
}

let bookCount = 10;
for (let i = 0; i < bookCount; i++) {
    console.log("Book count is " + i)
}

for (let i = 1; i < bookCount+1; i++) {
    console.log("Book count is " + i)
}

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " is odd");   
    }    
}

let add = (a,b) => {
    let sum = a+b;
    return ('sum of ' + a + ' and ' + b + ' is: ' + sum);
}

console.log(add(1,2));

let printNumbersTill = (n) => {
    for (let i = 1; i < n+1; i++) {
        console.log(i);        
    }
}

printNumbersTill(25)

let getGreetingTo = (name) => {
    return 'Hello ' + name + '!';
}

console.log(getGreetingTo('Mark'));

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }
}

printValues([0, 3, 6, 7, 9]);

let printValuesWithForEach = (array) => {
    array.forEach(number => {
        console.log(number);
        
    });
}

let myArray = [10, 20, 30, 50, 12]
printValuesWithForEach(myArray);

$('#title').text('My new title');