function play(str) {
  let displayField = document.getElementById('display').innerHTML = str;
  displayField.innerHTML = str;

  let audio = document.getElementById(str);
  audio.play();
};

window.document.onkeyup = function(event) {
  let keystroke = event.key
  if (keystroke === "q" || keystroke === "Q") {
    play("Q");
  } else if (keystroke === "w" || keystroke === "W") {
    play("W");
  } else if (keystroke === "e" || keystroke === "E") {
    play("E");
  } else if (keystroke === "a" || keystroke === "A") {
    play("A");
  } else if (keystroke === "s" || keystroke === "S") {
    play("S");
  } else if (keystroke === "d" || keystroke === "D") {
    play("D");
  } else if (keystroke === "z" || keystroke === "Z") {
    play("Z");
  } else if (keystroke === "x" || keystroke === "X") {
    play("X");
  } else if (keystroke === "c" || keystroke === "C") {
    play("C");
  }
};