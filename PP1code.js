onEvent("Shaunak", "click", function( ) {
  open("https://dikhe.ga");
});
onEvent("Smita", "click", function( ) {
  var p = randomNumber(0, 255);
  var q = randomNumber(0, 255);
  var r = randomNumber(0, 255);
  var s = randomNumber(0, 255);
  setProperty("screen1", "background-color", rgb(p, q, r, s));
});
onEvent("text_input1", "input", function( ) {
  if (getText("text_input1") == "2943") {
    playSound("you have sucsessfully opened the phone.mp3", false);
    setScreen("screen3");
  }
});
onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("Ayush", "click", function( ) {
  setProperty("screen1", "background-color", "yellow");
});
onEvent("button2", "click", function( ) {
  setScreen("screen2");
});
onEvent("button3", "click", function( ) {
  setScreen("screen1");
});
