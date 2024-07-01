let testScores = [39,43,50,78,92,66,77,80,92,81];
let result = testScores.filter((number)  =>{
    return number >= 70;
})
console.log(result);



let studentsScores = [85,92,78,88,95];
let upgradedScore = studentsScores.map(item =>item + 5);
console.log(upgradedScore);


const eachNumber = [2,4,6,8,10];
const numberSquared = eachNumber.map(number =>number * number);
console.log(numberSquared);


let obj = {}
let count = 0;
const bookClubMembers = ["Emily", "Jack", "Sophia", "Daniel"];
const books = ["Adventure","Poems","Fiction","History"];
let distribution = 0;
for (distribution of bookClubMembers){
    obj[distribution] = books[count++]
}

console.log(obj);

let classTiming = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
let afternoonClasses = classTiming.filter(time => time.includes("PM") );
console.log(afternoonClasses);


const expenses = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80}

let totalAmount = 0;
for(category in expenses){
    totalAmount += expenses[category]
}
console.log(`The Total Amount of Category : ${totalAmount}`);