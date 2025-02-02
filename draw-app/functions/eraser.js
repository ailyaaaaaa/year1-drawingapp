function Eraser(){
	//set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.

	let previousMouseX = -1;
	let previousMouseY = -1;

	this.draw = function(){

		//set ink colour to colour selector value
		let bgColourInput = select('#bgColour');
    	let bgColour = bgColourInput.value();
		stroke(bgColour);
		
		//set stroke weight to slider value
		let thickness = select('#penRange').value();
        strokeWeight(thickness);

		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}