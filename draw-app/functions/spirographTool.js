function spirographTool(){
    //set properties
    this.icon = "assets/spirograph.jpg";
	this.name = "Spirograph";
        
    //initialise variables for angles and previous coordinates
    let angle1 = 0;
    let angle2 = 0;
    let previousX;
    let previousY;
    
    //set offset value
    let offset = 40;

    //change angle mode to degrees before draw function initialises
    this.setup = function(){
        angleMode(DEGREES);
    }
    
    this.draw = function(){
        
        strokeWeight(1);

        //set ink colour to colour selector value
        let colourInput = select('#penColour');
    	let penColour = colourInput.value();
		stroke(penColour);

        // get the value of the radius1 input element
        let radius1 = select("#radius1").value();
        //event listener for changes in slider value
        select("#radius1").changed(() => {
            radius1 = select("#radius1").value();
        });

        let radius2 = 50;

        //translate the origin to the center of the canvas
        translate(width / 2, height / 2);
        
        //calculate coordinates for the first point on spirograph
        let x1 = radius1 * cos(angle1);
        let y1 = radius1 * sin(angle1);
        
        //calculate coordinates for the second point on spirograph
        let x2 = x1 + radius2 * cos(angle2);
        let y2 = y1 + radius2 * sin(angle2);
        
        //draw a line from previous coordinates to current
        line(previousX, previousY, x2, y2);
        
        //update previous coordinates
        previousX = x2;
        previousY = y2;
        
        //increment angles
        angle1 += 1;
        angle2 += 5;
    };
}