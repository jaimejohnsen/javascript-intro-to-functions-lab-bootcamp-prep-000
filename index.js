function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  return console.log(shout(string));
}
function logWhisper(string) {
  return console.log(whisper(string));
}
function sayHiToGrandma(string){

if (shout(string) === string) {
  console.log("YES INDEED!")
}
 else if (whisper(string) === string) { 
  console.log(whisper(string)
}
 else if (mixedCase.toUpperCase() === mixedCase)   {console.log("I love you,Grandma.") 
}