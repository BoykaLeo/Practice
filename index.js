let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
  let res = JSON.parse(request.response);

  console.log(res)


  let res1 =res.reduce((a,b)=>a+b.population,0) 

  console.log(res1)
  
  
};



