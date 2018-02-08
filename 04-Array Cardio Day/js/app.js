document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello World");


    // ## Array Cardio Day 1
    // Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    ];
    
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

       

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let newArrey = inventors.filter(function (inventors) {
    if (inventors.year > 1500 && inventors.year < 1600) {
        let filteredArr = [];
        filteredArr.push(inventors.year);
        return filteredArr;
    }
});

console.log(newArrey);



// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
    
let name =  inventors.map(function (inventors){
    return inventors.first + "" + inventors.last;
});     
console.log(name);



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let sortAge = inventors.sort(function(a,b) {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortAge);



// Array.prototype.reduce()
// 4. How many years did all the inventors live?

let yearsLive = inventors.reduce(function(total, inventor){
    return total + (inventor.passed - inventor.year);
    },0);  
console.log(yearsLive);



  // 5. Sort the inventors by years lived
  let sortAge2 = inventors.sort(function(a,b) {
    let ollder = a.passed - a.year;
    let younger = b.passed - b.year;
    if (younger > ollder) {
        return -1;
    } else
        return 1;
});
console.log(sortAge2);



// 6. sort Exercise
// Sort the people alphabetically by last name
//     let lastNameOrder = people.sort(function(a,b){
//         let [aLast, aFirst] = a.split(",");
//         let [bLast, bFirst] = b.split(",");
//         if (aLast > bFirst) {
//             return 1;
//         } else {
//             return -1;
//         }
//     });
// console.log(lastNameOrder);


let lastNameOrder = people.sort(function(a,b){
    let [aLast,aFirst] = a.split(', ').reverse();
    let [bLast,bFirst] = b.split(', ').reverse();
    return aLast > bLast ? -1 : 1;
});
console.log(lastNameOrder);




// 7. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let joinCars = data.reduce(function(obj, item) {
    if(!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  console.log(joinCars);

    










});