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
  fill(color(220,80,90));
  //console.log(inputAdgangskode.value());
  let s = "Dit kodeord til Lectio er.." + inputAdgangskode.value() + /n + "Denne side er til undervisning og gemmer IKKE din kode!";
  text(s, 30, 50, 500, 500);
  }
}
