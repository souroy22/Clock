var hr = document.querySelector("#digiHr");
var mn = document.querySelector("#digiMn");
var sec = document.querySelector("#digiSec");
var am_pm = document.querySelector("#am-pm");

setInterval(() => {
  let d = new Date();
  // retriving hours, minutes and seconds from date
  let htime = d.getHours();
  let mtime = d.getMinutes();
  let stime = d.getSeconds();

  // for analog clock
  // calculate the angle of the hands
  hrotation = 30 * htime + mtime / 2 + stime / 12;
  mrotation = 6 * mtime + stime / 10;
  srotation = 6 * stime;

  // according to the angles change the style of the hands
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

  // for digital clock

  am_pm.innerText = htime < 12 ? "A.M." : "P.M.";

  if (htime > 12) {
    htime = htime - 12;
  }

  hr.innerText = htime < 10 ? "0" + htime : htime;

  mn.innerText = mtime < 10 ? "0" + mtime : mtime;

  sec.innerText = stime < 10 ? "0" + stime : stime;
}, 1000);
