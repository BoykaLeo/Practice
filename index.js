// let request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v2/all");

// request.send();

// request.onload = function () {
//   let res = JSON.parse(request.response);

//   console.log(res)

//   let res1 =res.reduce((a,b)=>a+b.population,0)

//   console.log(res1)

// };

// let cont = document.createElement("div")
// cont.style.backgroundColor="green"
// cont.setAttribute("class","container")

// let row = document.createElement("div")
// row.setAttribute("class","row")

// let col = document.createElement("div")
// col.setAttribute("class","col")
// col.innerHTML="this is col"

// let col1 = document.createElement("div")
// col1.setAttribute("class","col-1")

// row.append(col,col1)

// cont.append(row)
// document.body.append(cont)

// FOrm Creation Usign DOM

// function labels(tag, attrname, attrvalue, cont) {
//   let ele = document.createElement(tag);
//   ele.setAttribute(attrname, attrvalue);
//   ele.innerHTML = cont;
//   return ele;
// }

// function inputs(tag, attrname, attrvalue, attrname1, attrvalue1) {
//   let ele = document.createElement(tag);
//   ele.setAttribute(attrname, attrvalue);
//   ele.setAttribute(attrname1, attrvalue1);
//   return ele;
// }

// function linebreak(tag) {
//   let ele = document.createElement(tag);
//   return ele;
// }

// let createlabels = labels("label", "for", "firstname", "Firstname");
// let br0 = linebreak("br");
// let createinput = inputs("input", "type", "text", "id", "text");
// let br = linebreak("br");

// let createlabels1 = labels("label", "for", "middlename", "middlename");
// let br01 = linebreak("br");
// let createinput1 = inputs("input", "type", "text", "id", "text");
// let br1 = linebreak("br");

// let createlabels2 = labels("label", "for", "middlename", "middlename");
// let br02 = linebreak("br");
// let createinput2 = inputs("input", "type", "text", "id", "text");
// let br2 = linebreak("br");

// let createlabels3 = labels("label", "for", "phonenumber", "phonenumber");
// let br03 = linebreak("br");
// let createinput3 = inputs("input", "type", "number", "id", "number");
// let br3 = linebreak("br");

// document.body.append(
//   createlabels,
//   br0,
//   createinput,
//   br,
//   createlabels1,
//   br01,
//   createinput1,
//   br1,
//   createlabels2,
//   br02,
//   createinput2,
//   br2,
//   createlabels3,
//   br03,
//   createinput3,
//   br3
// );

// Validation  Using Form    

function valid() {
  let firstname = document.getElementById("firstname").value;
  let middlename = document.getElementById("middlename").value;
  let lastname = document.getElementById("lastname").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;

  console.log(`
  ${firstname}
  ${middlename}
  ${lastname}
  ${mail}
  ${pass}
  `); 
}

// let  ele = document.createElement("div");
// ele.style.backgroundColor = "Green"
// ele.setAttribute("class", "main");

// let ele1 = document.createElement("span")
// ele1.setAttribute("class", "main1");
// ele1.innerHTML= "This is span";
// ele1.style.backgroundColor = "red"

// ele.append(ele1)
// document.body.append(ele);
