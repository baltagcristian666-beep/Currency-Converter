const sDiv = document.getElementsByClassName("s-div")[0]
const inp = document.querySelector("#inp")
const btn = document.querySelector("#f-div-btn")
const USD = 0.23 //dolar
const EUR = 0.20 //euro
const JPY = 35.79 // yen
const GBP = 0.17 // pounds
const CNY = 1.6 // yuan
const title = [
    "(LEU/USD) in 2/23/2026",
    "(LEU/EUR) in 2/23/2026",
    "(LEU/JPY) in 2/23/2026",
    "(LEU/GBP) in 2/23/2026",
    "(LEU/CNY) in 2/23/2026"
]

const sPs = []

function init(){

    const frag = document.createDocumentFragment()

    for(let i=0; i<5; i++){
    const fDiv = document.createElement("div")
    fDiv.classList.add("s-f-div")
    const fP = document.createElement("p")
    fP.classList.add("s-f-div-f-p")
    fP.textContent = title[i]
    const sP = document.createElement("p")
    sP.classList.add("s-f-div-s-p")
    sPs.push(sP)
    fDiv.append(fP, sPs[i])
    frag.append(fDiv)
    }
    sDiv.append(frag)
}


function render(){
    let inpP = (Number(inp.value)>0) ? Number(inp.value) : 0
    

    sPs[0].textContent =`${inpP} RON is ${(inpP*0.23).toFixed(2)} USD / ${inpP} USD is ${(inpP/0.23).toFixed(2)} RON`
    sPs[1].textContent =`${inpP} RON is ${(inpP*0.20).toFixed(2)} EUR / ${inpP} EUR is ${(inpP/0.20).toFixed(2)} RON`
    sPs[2].textContent =`${inpP} RON is ${(inpP*35.79).toFixed(2)} JPY / ${inpP} JPY is ${(inpP/35.79).toFixed(2)} RON`
    sPs[3].textContent =`${inpP} RON is ${(inpP*0.17).toFixed(2)} GBP / ${inpP} GBP is ${(inpP/0.17).toFixed(2)} RON`
    sPs[4].textContent =`${inpP} RON is ${(inpP*1.6).toFixed(2)} CNY / ${inpP} CNY is ${(inpP/1.6).toFixed(2)} RON`
    }

btn.addEventListener("click", function(){
    render()
})

init()
render()
