var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () { 
  var res = JSON.parse(request.response);

  console.log(res);  

  var sum = [1, 2, 3];   

  var pop = res.reduce((a, b) => a + b.population, 0);  

  console.log(pop);   

  
};
res.map((ele)=>ele.population); 
var arr = [3, "q", "q", "q", 2, 3, "q", 3, "q", 2, 4, 9, 3];


var min = 1; 

var count = 1;

var element;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;

      if (min < count) {
        min = count;
        element = arr[i];
      }
    }
  }
  count = 0;
}

console.log(element);

// class Cricketer {
//   constructor(cricketer_name, cricketer_age, cricketer_salary) {
//     this.cricname = cricketer_name;
//     this.cricage = cricketer_age;
//     this.cricsalary = cricketer_salary;
//   }

//   sample(lastname) {
//     return this.cricname + lastname;
//   }
// }

// var a = new Cricketer("Lee", "24", 4.5);

// console.log(`cricketer_name : ${a.cricname}
// cricketer_age : ${a.cricage}
// cricketer_salary : ${a.cricsalary}
// ${a.sample("prabu")}`);

//var arr = [12,13,14,15];

// res = [];

// for (let i = 0; i < arr.length; i++) { 
//   a = arr[i] * 2;
//   res.push(a);
// }

// console.log(res);

// var a = arr.filter((ele)=>ele%2===1 );
// console.log(a);

// let obj = [1,2,3,6,8];

// let [name,place,age]=obj;

// console.log(name,place,age);

let arr = [1, 2, 3, 4, 5]; 

// var sum = arr.reduce((a, b) => a + b );
// console.log(sum);

// arr.forEach((element) => console.log(element));


let res = arr.reduce((ele)=> ele%2==0 );

console.log(res)




