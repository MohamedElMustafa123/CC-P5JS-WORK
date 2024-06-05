let table;
let temp = [];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function preload() {
  table = loadTable('Average Temperature Per Month Across The UAE.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500);
  let row = table.getRow(0);
  for (let i = 0; i < month.length; i++) {
    temp.push(row.getNum(month[i]));
  }
}


function draw() {
  background(0);
  drawHeading();
  drawAxes();
  drawLineGraph();
}

function drawHeading(){
  fill(255);
  textSize(32);
  textAlign(CENTER, TOP);
  text("Avg temperature per month across the UAE in °C", width/2, 10);
}

function drawAxes() {
  // Draw x-axis
  textSize(12);
  fill(255);
  stroke(255);
  line(50, 350, 750, 350);
  for (let i = 0; i < month.length; i++) {
    let x = map(i, 0, month.length - 1, 50, 750);
    textAlign(CENTER);
    text(month[i], x, 370);
  }

  // Draw y-axis
  line(50, 50, 50, 350);
  for (let i = 0; i <= 50; i += 10) {
    let y = map(i, 0, 50, 350, 50);
    textAlign(RIGHT);
    text(i, 40, y);
  }
}

function drawLineGraph() {
  noFill();
  stroke(0, 0, 255);
  beginShape();
  for (let i = 0; i < temp.length; i++) {
    let x = map(i, 0, temp.length - 1, 50, 750);
    let y = map(temp[i], 0, 50, 350, 50);
    vertex(x, y);
  }
  endShape();
}
