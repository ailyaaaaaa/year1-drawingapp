// stamp tool function
function starStampTool(){
    //set properties
    this.icon = "assets/star.jpg";
	this.name = "starStamp";
    
    //draw function takes x and y coordinates as values
    this.draw = function(x,y){

        //set ink colour to colour selector value
        let selectedColor = select('#penColour').value();
        fill(selectedColor);
        stroke(selectedColor);

        //draw star stamp when mouse pressed
        if(mouseIsPressed){
            beginShape();
            vertex(mouseX + 20, mouseY - 50);
            vertex(mouseX - 10, mouseY + 20);
            vertex(mouseX - 80, mouseY + 15);
            vertex(mouseX - 30, mouseY + 70);
            vertex(mouseX - 60, mouseY + 150);
            vertex(mouseX + 20, mouseY + 115);
            vertex(mouseX + 100, mouseY + 150);
            vertex(mouseX + 70, mouseY + 70);
            vertex(mouseX + 120, mouseY + 15);
            vertex(mouseX + 50, mouseY + 20);
            endShape();
        }
    };
}