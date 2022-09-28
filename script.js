console.log("Probando, probando")

const inputDatoA= document.getElementById("datoA")
const inputDatoB= document.getElementById("datoB")
const inputResult= document.getElementById("result")

const btnsum = document.getElementById("sum")
const btnsub = document.getElementById("sub")
const btnmult = document.getElementById("mult")
const btndiv = document.getElementById("div")

const sum = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const mySum = () => {
    const datoA = parseInt(inputDatoA.value)
    const datoB = parseInt(inputDatoB.value)
    inputResult.value = sum(datoA, datoB)
}
const mySub = () => {
    const datoA = parseInt(inputDatoA.value)
    const datoB = parseInt(inputDatoB.value)
    inputResult.value = sub(datoA, datoB)
}
const myMult = () => {
    const datoA = parseInt(inputDatoA.value)
    const datoB = parseInt(inputDatoB.value)
    inputResult.value = mul(datoA, datoB)
}
const myDiv = () => {
    const datoA = parseInt(inputDatoA.value)
    const datoB = parseInt(inputDatoB.value)
    inputResult.value = div(datoA, datoB)
}

btnsum.addEventListener("click", mySum)
btnsub.addEventListener("click", mySub)
btnmult.addEventListener("click", myMult)
btndiv.addEventListener("click", myDiv)
