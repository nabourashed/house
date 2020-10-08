function setup() {
  createCanvas(500, 500);
}

function preload() {
  bush=loadImage('bush.png');
  stars=loadImage('stars.png');
  clouds=loadImage('clouds.png');
}

function draw() {
  background(0, mouseX / 2, mouseX / 2);
  noStroke();

  // sun
  fill((255 / width) * mouseX, (255 / width) * mouseX, 0);
  circle(mouseX, height / 5, height / 7);

  // moon
  fill(255); //moon white part 
  circle(mouseX * 3, height / 5, width / 9);
  noStroke(); //moon dark part
  fill(0, mouseX / 2, mouseX / 2);
  circle(mouseX * 3 + 0.02 * width, height / 5, width / 10);
  
  if (mouseX > 200) {
    // clouds
   image(clouds, 50, 30, 400, 90);
  }
  
  if (mouseX < 100) {
   //stars
  image(stars, 0, 30, 500, 90);
  }

  // house
  fill(248, 248, 255);
  rect(150, 230, 200, 170);

  // brick1
  fill(128, 0, 0);
  rect(150, 250, 30, 10);

  // brick2
  fill(178, 34, 34);
  rect(185, 250, 30, 10);

  // brick3
  fill(128, 0, 0);
  rect(220, 250, 30, 10);

  // brick4
  fill(178, 34, 34);
  rect(255, 250, 30, 10);

  // brick5
  fill(128, 0, 0);
  rect(290, 250, 30, 10);

  // brick6
  fill(178, 34, 34);
  rect(325, 250, 25, 10);

  // brick1 row2
  fill(178, 34, 34);
  rect(150, 265, 25, 10);

  // brick2 row2
  fill(128, 0, 0);
  rect(180, 265, 30, 10);

  // brick3 row2
  fill(178, 34, 34);
  rect(215, 265, 30, 10);

  // brick4 row2
  fill(128, 0, 0);
  rect(250, 265, 30, 10);

  // brick5 row2
  fill(178, 34, 34);
  rect(285, 265, 30, 10);

  // brick6 row2
  fill(128, 0, 0);
  rect(320, 265, 30, 10);

  // brick1 row3
  fill(128, 0, 0);
  rect(150, 280, 30, 10);

  // brick2 row3
  fill(178, 34, 34);
  rect(185, 280, 30, 10);

  // brick3 row3
  fill(128, 0, 0);
  rect(220, 280, 30, 10);

  // brick4 row3
  fill(178, 34, 34);
  rect(255, 280, 30, 10);

  // brick5 row3
  fill(128, 0, 0);
  rect(290, 280, 30, 10);

  // brick6 row3
  fill(178, 34, 34);
  rect(325, 280, 25, 10);

  // brick1 row4
  fill(178, 34, 34);
  rect(150, 295, 25, 10);

  // brick2 row4
  fill(128, 0, 0);
  rect(180, 295, 30, 10);

  // brick3 row4
  fill(178, 34, 34);
  rect(215, 295, 30, 10);

  // brick4 row4
  fill(128, 0, 0);
  rect(250, 295, 30, 10);

  // brick5 row4
  fill(178, 34, 34);
  rect(285, 295, 30, 10);

  // brick6 row4
  fill(128, 0, 0);
  rect(320, 295, 30, 10);

  // brick1 row5
  fill(128, 0, 0);
  rect(150, 310, 30, 10);

  // brick2 row5
  fill(178, 34, 34);
  rect(185, 310, 30, 10);

  // brick3 row5
  fill(128, 0, 0);
  rect(220, 310, 30, 10);

  // brick4 row5
  fill(178, 34, 34);
  rect(255, 310, 30, 10);

  // brick5 row5
  fill(128, 0, 0);
  rect(290, 310, 30, 10);

  // brick6 row5
  fill(178, 34, 34);
  rect(325, 310, 25, 10);

  // brick1 row6
  fill(178, 34, 34);
  rect(150, 325, 25, 10);

  // brick2 row6
  fill(128, 0, 0);
  rect(180, 325, 30, 10);

  // brick3 row6
  fill(178, 34, 34);
  rect(215, 325, 30, 10);

  // brick4 row6
  fill(128, 0, 0);
  rect(250, 325, 30, 10);

  // brick5 row6
  fill(178, 34, 34);
  rect(285, 325, 30, 10);

  // brick6 row6
  fill(128, 0, 0);
  rect(320, 325, 30, 10);

  // brick1 row7
  fill(128, 0, 0);
  rect(150, 340, 30, 10);

  // brick2 row7
  fill(178, 34, 34);
  rect(185, 340, 30, 10);

  // brick3 row7
  fill(128, 0, 0);
  rect(220, 340, 30, 10);

  // brick4 row7
  fill(178, 34, 34);
  rect(255, 340, 30, 10);

  // brick5 row7
  fill(128, 0, 0);
  rect(290, 340, 30, 10);

  // brick6 row7
  fill(178, 34, 34);
  rect(325, 340, 25, 10);

  // brick1 row8
  fill(178, 34, 34);
  rect(150, 355, 25, 10);

  // brick2 row8
  fill(128, 0, 0);
  rect(180, 355, 30, 10);

  // brick3 row8
  fill(178, 34, 34);
  rect(215, 355, 30, 10);

  // brick4 row8
  fill(128, 0, 0);
  rect(250, 355, 30, 10);

  // brick5 row8
  fill(178, 34, 34);
  rect(285, 355, 30, 10);

  // brick6 row8
  fill(128, 0, 0);
  rect(320, 355, 30, 10);

  // brick1 row9
  fill(128, 0, 0);
  rect(150, 370, 30, 10);

  // brick2 row9
  fill(178, 34, 34);
  rect(185, 370, 30, 10);

  // brick3 row9
  fill(128, 0, 0);
  rect(220, 370, 30, 10);

  // brick4 row9
  fill(178, 34, 34);
  rect(255, 370, 30, 10);

  // brick5 row9
  fill(128, 0, 0);
  rect(290, 370, 30, 10);

  // brick6 row9
  fill(178, 34, 34);
  rect(325, 370, 25, 10);

  // brick1 row10
  fill(178, 34, 34);
  rect(150, 385, 25, 10);

  // brick2 row10
  fill(128, 0, 0);
  rect(180, 385, 30, 10);

  // brick3 row10
  fill(178, 34, 34);
  rect(215, 385, 30, 10);

  // brick4 row10
  fill(128, 0, 0);
  rect(250, 385, 30, 10);

  // brick5 row10
  fill(178, 34, 34);
  rect(285, 385, 30, 10);

  // brick6 row10
  fill(128, 0, 0);
  rect(320, 385, 30, 10);

  // grass
  fill(152, 251, 152);
  rect(0, 400, 500, 100);

  // chimney
  fill(112, 128, 144);
  rect(140, 120, 35, 90);

  // chimney thing
  fill(176, 196, 222);
  rect(134.5, 120, 45, 20);

  // chimey brick 1
  fill(0, 0, 0);
  rect(140, 145, 10, 5);

  // chimey brick 2
  fill(0, 0, 0);
  rect(155, 145, 10, 5);

  // chimey brick 3
  fill(0, 0, 0);
  rect(170, 145, 5, 5);

  // chimey brick 1
  fill(0, 0, 0);
  rect(140, 155, 5, 5);

  // chimey brick 2
  fill(0, 0, 0);
  rect(150, 155, 10, 5);

  // chimey brick 3
  fill(0, 0, 0);
  rect(165, 155, 10, 5);

  // chimey brick 1
  fill(0, 0, 0);
  rect(140, 165, 10, 5);

  // chimey brick 2
  fill(0, 0, 0);
  rect(155, 165, 10, 5);

  // chimey brick 3
  fill(0, 0, 0);
  rect(170, 165, 5, 5);

  // chimey brick 1
  fill(0, 0, 0);
  rect(140, 175, 5, 5);

  // chimey brick 2
  fill(0, 0, 0);
  rect(150, 175, 10, 5);

  // chimey brick 1
  fill(0, 0, 0);
  rect(140, 185, 10, 5);

  // roof
  fill(176, 196, 222)
  triangle(110, 246, 243, 75, 390, 246);

  // roof
  fill(119, 136, 153)
  triangle(120, 246, 243, 90, 380, 246);

  stroke(176, 196, 222);
  strokeWeight(4);

  // door
  fill(255, 250, 250);
  rect(215, 318, 35, 80);

  // door2
  fill(255, 250, 250);
  rect(255, 318, 35, 80);

  // handle
  noStroke();
  fill(192, 192, 192);
  ellipse(240, 360, 7, 7);

  // handle
  fill(192, 192, 192);
  ellipse(264, 360, 7, 7);

  // path
  beginShape();
  fill(255, 239, 213);
  vertex(200, 400);
  vertex(301, 400);
  vertex(400, 500);
  vertex(100, 505);
  endShape(CLOSE);

  stroke(192, 192, 192);
  strokeWeight(4);

  // window
  fill(240, 255, 255);
  arc(252, 303, 75, 75, -PI, 0, CHORD);

  if (mouseX < 100) {
  // window
  fill(240,230,140);
  arc(252, 303, 75, 75, -PI, 0, CHORD);
  }
  
  // bush
  noStroke();
  image(bush, 100, 330, 100, 80);
  // fill(46, 139, 87);
  // arc(165, 390, 65, 65, -3.9, QUARTER_PI, CHORD);

 // bush
  image(bush, 300, 330, 100, 80);
  
//   // tree
//   fill(139,69,19);
//   rect(60, 330, 25, 90);
  
//   // tree
//   fill(160,82,45);
//   rect(50, 330, 15, 90);
  
//   // leaves
//   fill(60, 179, 113);
//   ellipse(68, 310, 80, 90);

}