


let horses = [];
let horse1, horse2, horse4

function preload() {
  horse1 = loadImage("images/horse1.png");
  horse2 = loadImage("images/horse2.png");
  horse4 = loadImage("images/horse4.png");
}





function setup() {
  horses.push(horse1);
  horses.push(horse2);
  horses.push(horse4);

  createCanvas(800, 400);
  // let button = createButton('this is my beautiful horse');
  // button.position(320,350);
  horse1checkbox = createCheckbox(1);
  horse1checkbox.position(130,100);
  horse2checkbox = createCheckbox(2);
  horse2checkbox.position(330,100);
  horse3checkbox = createCheckbox(3);
  horse3checkbox.position(530,100)
  theInput = createInput();
  theInput.position (500,50);


}


function draw() {
  background(220);
  text('choose your horse', 200,50);

  image(horses[0], 100,200,100,100);
  image(horses[1], 300,200,100,100);
  image(horses[2], 500,200,100,100);
  if(horse1checkbox.checked()) {
    clear();
    noStroke();
    fill(78,160,22);
    rect(0,0,800,400);
    imageMode(CENTER);
    image (horses[0],350,200,200,200);
    let button = createButton('this is my beautiful horse');
    button.position(320,350);
    
    if (button.mousePressed()) {
      
      let words = theInput.value();
      fill(random(0,255), random(0,255), random(0,255))
      text(words, mouseX, mouseY);
      
    }
  }
  

  if(horse2checkbox.checked()) {
    clear();
    noStroke();
    fill(150,30,210);
    rect(0,0,800,400);
    imageMode(CENTER);
    image (horses[1],350,200,200,200);
    let button = createButton('this is my beautiful horse');
    button.position(320,350);
    if (button.mousePressed()) {
      
      let words = theInput.value();
      fill(random(0,255), random(0,255), random(0,255))
      text(words, mouseX, mouseY);
      
    }

    }
  
  if(horse3checkbox.checked()) {
    clear();
    noStroke();
    fill(18,29,130);
    rect(0,0,800,400);
    imageMode(CENTER);
    image (horses[2],350,200,200,200);
    let button = createButton('this is my beautiful horse');
    button.position(320,350);
    if (button.mousePressed()) {
      
      let words = theInput.value();
      fill(random(0,255), random(0,255), random(0,255))
      text(words, mouseX, mouseY);
      
    }
  }



}



