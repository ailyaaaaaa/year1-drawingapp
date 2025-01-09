//spray can function
function sprayCanTool() {

    //initialise properties
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";

    //get slider value and map to range
    this.spread = select('#penRange').value();    
    this.points = map(this.spread, 0, 100, 0, 40);

    //event listener to update this.spread
    select('#penRange').changed(() => {
        this.spread = select('#penRange').value();
    });

    this.draw = function () {

        strokeWeight(2);

        //set ink colour to colour selector value
        let selectedColor = select('#penColour').value();
        fill(selectedColor);
        stroke(selectedColor);

        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if (mouseIsPressed) {
            for (let i = 0; i < this.points; i++) {
                point(random(mouseX - this.spread, mouseX + this.spread),
                    random(mouseY - this.spread, mouseY + this.spread));
            }
        }
    }
}