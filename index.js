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

//number five
let arr = ["boy", "man", "girl", "school", "girl", "woman"];

let prtAr = [];
let stmt= [];
let counts = {};

arr.forEach(item => {
    if (counts[item]) {
        counts[item]++;
    } else {
        counts[item] = 1;
    }
});

for (let item in counts) {
    if (counts[item] === 1) {
        uniqueArr.push(item);
    } else {
        duplicatesArr.push(item);
    }
}

console.log("Array without duplicates:", prtAr);
console.log("Array with duplicates only:", stmt);
//number 
