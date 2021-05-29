setInterval(() => {
  let d = new Date();
  let htime = d.getHours();
  let mtime = d.getMinutes();
  let stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// let d = new Date();
// let htime = d.getHours();
// let mtime = d.getMinutes();
// let stime = d.getSeconds();

var hr = document.querySelector("#digiHr");
var mn = document.querySelector("#digiMn");
var sec = document.querySelector("#digiSec");
// console.log(hr, mn, sec);
setInterval(() => {
  let d = new Date();
  //   console.log(d);
  let htime = d.getHours();
  let mtime = d.getMinutes();
  let stime = d.getSeconds();
//   console.log(htime);
htime = Math.abs(htime - 12);
    if(htime < 10){
        hr.innerText = "0" + htime;
    }else{
        hr.innerText = htime;
    }
    if(mtime < 10){
        mn.innerText = "0" + mtime;
    }else{
        mn.innerText = mtime;
    }
    if(stime < 10){
        sec.innerText = "0" + stime;
    }else{
        sec.innerText = stime;
    }
}, 1000);
