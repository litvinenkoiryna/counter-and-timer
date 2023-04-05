let click = document.getElementById('btn');
let i = 0;
let c = document.getElementById('count');

btn.onclick = function (){
   i++;
   c.innerText = i; 
}

let txtColor = document.getElementById('txtColor');
let btnSetColor = document.getElementById('btnSetColor');

btnSetColor.onclick = () => {
   let color = txtColor.value;
   document.body.style.backgroundColor = color;
}


// Годинник, що щосекунди оновлюється на екрані

setInterval(() => {
   let date = new Date();
let watch = document.getElementById('watch');
watch.innerHTML = date.toLocaleTimeString();
} , 1000)




console.log(date); //Thu Mar 16 2023 12:57:19 GMT+0200 (за східноєвропейським стандартним часом)

console.log(date.getHours()) // 12 (на момент)
console.log(date.getMinutes()) // 57
console.log(date.toLocaleTimeString()) // 12:57:19 при оновленні сторінки змінюється на поточну

document.write(date.toLocaleTimeString()); 


