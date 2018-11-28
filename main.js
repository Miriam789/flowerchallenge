// Don't worry about this line too much right now. It
// just uses the svg.js library to prepare to draw shapes.
// Do notice that it references the id of the div we made
// in the previous step.
var drawing = SVG('drawing-area');

// Draw a rectangle. The first number is the width,
// the second number is the height.

function mirm(){



drawing
	.ellipse(100, 50)
	.fill('black')
	.stroke('orange')
  	.center(290, 200);
  	
drawing 
	.ellipse(100, 50)
	.fill('black')
	.stroke('orange')
  	.center(110, 200);
  

drawing 

	.fill('black')
	.ellipse(100, 50)
	.stroke('orange')
  	.center(199, 112)
  	.rotate(90)

drawing 

	.fill('black')
	.ellipse(100, 50)
	.stroke('orange')
  	.center(200, 280)
  	.rotate(90)

drawing
	  .fill('yellow')
	  .ellipse(80, 80)
	  .stroke('pink')
	  .center(200, 200)
	  .rotate(45)
	}


mirm()

// drawing
// .text
// 	.path('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80')
// 	.animate(1000, '<>')
// 	.plot('M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80')
// 	.loop(true, true)