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
  textSize(20);
    stroke('red');
    fill(color(220, 100, 100));
    //console.log(inputAdgangskode.value());
    let s = "Dit kodeord til Lectio er.." + inputAdgangskode.value() + ".\n Denne side er til undervisning og gemmer IKKE din kode! \n\n Opgaver: \n 1) Hvad indikerer, at siden ikke er ægte? \n 2) Skriv et forslag til en e-mail på max 10 linjer, som kan lokke relevante brugere ind på siden.";
    text(s, 50, 400, 1000, 1000);
  }
}
