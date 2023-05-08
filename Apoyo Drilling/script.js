var mayorTemp = document.getElementById("mayorTemp");
var mayorC = document.getElementById("mayorC");
var climaSemanal = document.querySelectorAll(".weakly-weather-item p.mb-0");
var simbolo = document.querySelectorAll(".weakly-weather-item p.symb");

function cambiar(s, checkbox) {
  if (s == "user") {
    if (checkbox.checked) {
      mayorTemp.innerHTML = Math.round(
        parseInt(mayorTemp.getAttribute("value") * 1.8 + 32)
      );
      mayorC.innerHTML = "F";
      for (let i = 0; i < climaSemanal.length; i++) {
        climaSemanal[i].innerHTML = Math.round(
          parseInt(climaSemanal[i].getAttribute("value") * 1.8 + 32)
        );

        simbolo[i].innerHTML = "F";
      }
    } else {
      mayorTemp.innerHTML = mayorTemp.getAttribute("value");
      mayorC.innerHTML = "C";
      for (let i = 0; i < climaSemanal.length; i++) {
        climaSemanal[i].innerHTML = climaSemanal[1].getAttribute("value");
        simbolo[i].innerHTML = "C";
      }
    }
  }
}
