let img; 
let inputAdgangskode;

function preload() {
  img = loadImage('lectio.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
  let inputBrugernavn = createInput();
  inputBrugernavn.position(105, 251);
  inputBrugernavn.size(126,15);
  inputAdgangskode = createInput();
  inputAdgangskode.position(105, 280);
  inputAdgangskode.size(126,15);
  
  let button = createButton('');
  button.size(55,24);
  button.position(266,338);
  button.style('background-color', color(220, 100, 100, 0));
  button.mousePressed(greet);
  }

function greet() {
  if (inputAdgangskode.value()!='') {
  textSize(32);
  stroke('red');
  fill(color(220,80,100));
  //console.log(inputAdgangskode.value());
  text("Dit kodeord til Lectio er.." + inputAdgangskode.value(), 30, 50);
  text("Heldigvis gemmer jeg IKKE din kode!", 30, 100);
}
}