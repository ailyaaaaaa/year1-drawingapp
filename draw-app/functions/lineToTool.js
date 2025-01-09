function LineToTool() {
	//set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//set startMouseX and startMouseY to values mouseX and mouse Y will never take 
	let startMouseX = -1;
	let startMouseY = -1;
	let drawing = false;

	//create a drawing function
	this.draw = function(){

		//set ink colour to colour selector value
		let selectedColor = select('#penColour').value();
      	fill(selectedColor);
		stroke(selectedColor);

		//set stroke weight to slider value
		let thickness = select('#penRange').value();
        strokeWeight(thickness);

		if(mouseIsPressed){
			if (startMouseX == -1) {
				//change startMouseX and startmouseY to the coordinate where the mouse is pressed
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;

				//tell p5 you want to work with the pixels[] array
				loadPixels();
			}
			else {
				//update the value in the pixels[] array
				updatePixels();
				//draw a line from where the mouse was first pressed to where the mouse was released
				line(startMouseX, startMouseY, mouseX, mouseY);
			}
		}
		else if (drawing) {
			//reset the LineToTool() function, ready to draw another line
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	}
}
