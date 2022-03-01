

const bodytag = document.body;
const paragraph = document.createElement('p');
bodytag.appendChild(paragraph);
paragraph.append("Hey I'm red!");
paragraph.style.color = "red"; 
const header = document.createElement('h3');
header.style.color = "blue";
header.textContent="I'm a blue h3!"
bodytag.appendChild(header);
const div1 = document.createElement('div');
div1.style.border = "thick solid black";
div1.style.backgroundColor = "pink";
const divp = document.createElement('p');
const divh1 = document.createElement('h1');
divh1.textContent="Im in a div";
divp.textContent="ME TOO!";
div1.appendChild(divh1);
div1.appendChild(divp);
bodytag.appendChild(div1);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const btn2 = document.querySelector('#btn2');
// btn2.addEventListener('click', () => {
//   alert("Hello World");
// });

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }
// METHOD 2
//btn.onclick = alertFunction;
// METHOD 3
//btn.addEventListener('click', alertFunction);



// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
