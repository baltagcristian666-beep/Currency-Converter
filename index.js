const sDiv = document.getElementsByClassName("s-div")[0]
const inp = document.querySelector("#inp")
const btn = document.querySelector("#f-div-btn")
const USD = 0.23 //dolar
const EUR = 0.20 //euro
const JPY = 35.79 // yen
const GBP = 0.17 // pounds
const CNY = 1.6 // yuan
const title = [
    "Lenght (Meter/Feet)",
    "Volume (Liters/Gallons)",
    "Mass (Kilograms/Pounds)"
]










// // Ținem referințe către paragrafele “body” ca să le actualizăm rapid
// const bodyEls = [];

// init();
// render();
// btn.addEventListener("click", render);

// function init() {
//   const frag = document.createDocumentFragment();

//   for (let i = 0; i < 3; i++) {
//     const card = document.createElement("div");
//     card.className = "s-f-div";

//     const pTitle = document.createElement("p");
//     pTitle.className = "s-f-div-f-p";
//     pTitle.textContent = titles[i];

//     const pBody = document.createElement("p");
//     pBody.className = "s-f-div-s-p";

//     bodyEls.push(pBody);

//     card.appendChild(pTitle);
//     card.appendChild(pBody);
//     frag.appendChild(card);
//   }

//   sDiv.appendChild(frag);
// }

// function render() {
//   const x = Number(inp.value);
//   let v = 0;
//   if (Number.isFinite(x) && x > 0) v = x;

//   bodyEls[0].textContent =
//     `${v} meters = ${(v * feet).toFixed(2)} feet | ${v} feet = ${(v / feet).toFixed(2)} meters`;

//   bodyEls[1].textContent =
//     `${v} liters = ${(v * gallon).toFixed(2)} gallons | ${v} gallons = ${(v / gallon).toFixed(2)} liters`;

//   bodyEls[2].textContent =
//     `${v} kilograms = ${(v * pound).toFixed(2)} pounds | ${v} pounds = ${(v / pound).toFixed(2)} kilograms`;
// }