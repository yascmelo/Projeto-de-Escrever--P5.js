function setup() {
    createCanvas(947, 800);
    background("black");
  }
  
  function draw() {
    
  
    stroke("green");
    fill("blue");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
  }
  