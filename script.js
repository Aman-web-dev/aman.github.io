function fun(){

const dat = new Date()
   
const hours = dat.getHours()

let mins = dat.getMinutes()

let secs = dat.getSeconds()


//real time//

let rhours = hours.toString()

let rmins = mins.toString()

let rsecs = secs.toString()


let display= document.getElementById('display').textContent=rhours + ":" +"   " + rmins+"  " + ":" +rsecs;



// console.log(rhours,rmins,rsecs)


}



window.onload=setInterval(fun , 1000)