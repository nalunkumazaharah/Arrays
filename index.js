 //number 1
let arr1 =[3,7,34,90,12];
let arr2 =[true,"green","where",12,56];
let element1 = arr1[arr1.length-1];
let element2 = arr2[arr2.length-1];
console.log(element1);
console.log(element2);



//number2
Mypet =["Cow","Birds","Snake","Dog"];
let Mypets =["Cow","Bird","Snake","Dog"];
let statement = Mypets.join("");
console.log(statement)

//number3
var arr3 =[-5,9,5,3,2,-3,6,8,4,1];
let y = arr3.sort();
console.log(y);


//number six
let text = "renniw";
let orderedText = text.split('').reduce((acc, ch) => {
    let pos = 0;
    while (pos < acc.length && ch > acc[pos]) {
        pos++;
    }
    acc.splice(pos, 0, ch); 
    return acc;
}, []).join(''); 
console.log(orderedText);

let fruitSet = ["Apple", "Banana", "Jackfruit", "Mango", "pineaple", "Grape", "orange", "Peach", "avocado", "Berries"];
fruitSet.splice(4, 0, "Tomato");  
console.log(fruitSet);


//number four

let array = ["boy", "man", "girl", "school", "girl", "woman"];

let uniqueArray = [];
let duplicatesArray = [];
let elementCount = {};

array.forEach(item => {
    if (elementCount[item]) {
        elementCount[item]++;
        if (elementCount[item] === 2) {
            duplicatesArray.push(item);
        }
    } else {
        elementCount[item] = 1;
        uniqueArray.push(item);
    }
});

console.log("Array without duplicates:", uniqueArray);
console.log("Array with duplicates:", duplicatesArray);

