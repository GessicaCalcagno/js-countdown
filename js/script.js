let seconds = document.getElementById("seconds").innerHTML;


const secTime = setInterval(function () {
    console.log(secTime);
  seconds--;
  if (seconds < 0) {
    document.getElementById("happy-year").innerHTML = "BUON ANNO";
    clearInterval(secTime);
    console.log("riparte");
  } else {
    document.getElementById("seconds").innerHTML = seconds;
  }
}, 1000);

console.log(seconds);
