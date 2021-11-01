var s1;
var c1;
var p1;

function setup() {
  createCanvas(400,400);

  s1 = new Student("nihitha", 15, 9);
  s1.display();

  c1 = new Child("jade", 17, 11);
  c1.display();

  p1 = new Parent("adam", "architect", 1);
  p1.display();
}

function draw() 
{
  background(30);
  
}