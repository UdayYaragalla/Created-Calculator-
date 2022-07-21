let num1 = (document.getElementById('number1'))
let num2 = (document.getElementById('number2'))
let add = document.getElementById('add')
let sub = document.getElementById('sub')
let div = document.getElementById('div')
let mul = document.getElementById('mul')
let mod = document.getElementById('mod')
let answer = document.getElementById("answer");

add.addEventListener('click', ()=>{
   answer.innerText =  Number(num1.value)+Number(num2.value)
  
})
sub.addEventListener('click', ()=>{
   answer.innerText =  Number(num1.value)-Number(num2.value)
 
 })
 div.addEventListener('click', ()=>{
   answer.innerText =  Number(num1.value)/Number(num2.value)

 })
 mul.addEventListener('click', ()=>{
   answer.innerText =  Number(num1.value)*Number(num2.value)
   
 })
 mod.addEventListener('click', ()=>{
   answer.innerText =  Number(num1.value)%Number(num2.value)
   
})