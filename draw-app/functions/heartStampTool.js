// stamp tool function
function heartStampTool(){

    //set properties
    this.icon = "assets/heart.jpg";
	this.name = "heartStamp";

    //draw function takes x and y coordinates as values
    this.draw = function(x,y){

        //set ink colour to colour selector value
        let selectedColor = select('#penColour').value();
        fill(selectedColor);
        stroke(selectedColor);

        //draw heart stamp when mouse pressed
        if(mouseIsPressed){
            ellipse(mouseX - 40, mouseY, 100, 100);
            ellipse(mouseX + 40, mouseY, 100, 100);
            triangle(mouseX - 83.8, mouseY + 25, mouseX + 83.8, mouseY + 25, mouseX, mouseY + 120);
        }
    }
}