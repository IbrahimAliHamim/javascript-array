//-----------JS Prototype______

// ---------1______

// var fruits = ["Mango", "Jackfruit", "Guava", "Tangerine", "Orange", "Apple"];
// Array.prototype.myUcase = function(){
//     for(let i = 0; i < this.length; i++){
//         this[i] = this[i].toUpperCase();
//     }
// }
// fruits.myUcase();

// console.log(fruits);

// ---------2____

var messMates = ["Tushar", "Jahid", "Sourav", "Morsalin", "Shahjahan", "Arman", "Almin", "Srabon", "Sohel", "Mosaddek"];

Array.prototype.myUcase = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

messMates.myUcase();
console.log(messMates);