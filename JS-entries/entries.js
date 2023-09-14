const fruits = ["Mango", "Jackfruit", "Tangerine", "Grape", "Apple", "Pineapple", "Banana", "Orange", "Guava"];

let f = fruits.entries();

for (let x of f){
    document.getElementById("demo").innerHTML += x + "<br>";
};

