// WARNING IN IMAGE

let img; 
let inputAdgangskode;

function preload() {
  img = loadImage('lectio2.jpg');
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
  inputAdgangskode.changed(greet);
  
  let button = createButton('');
  button.size(55,24);
  button.position(266,338);
  button.style('background-color', color(220, 100, 100, 0));
  button.mousePressed(greet);
  }

function greet() {
  if (inputAdgangskode.value()!='') {
  textSize(16);
    fill(color(0, 0, 0));
    //console.log(inputAdgangskode.value());
    let s = " Tak. Denne side er IKKE Lectio, og har du indtastet dit Lectio-kodeord, er du blevet snydt..\n Siden er til undervisning og misbruger IKKE dit kodeord! \n\n Opgaver: \n 1) Hvad indikerer at websiden er ægte?\n 2) Hvad indikerer at websiden ikke er ægte? (ud over teksten med rød) \n 3) Hvor mange % af almindelige brugere tror du vil indtaste deres kodeord på siden? Begrund. \n 4) Skriv et forslag til en e-mail på max 10 linjer, som kan lokke relevante brugere ind på siden.";
    text(s, 50, 400, 1000, 1000);
    inputAdgangskode.hide();
  }
}
