//global variables that will store the toolbox colour palette and the helper functions.
let toolbox = null; //variable to store the toolbox object
let helpers = null; //variable to store the helper functions object
let c; //canvas variable
let bgColour; //background color variable

//undo feature variables
let previousState; //variable to store the previous state
let stateIndex = 0; //variable to track the current state index
let stateStack = []; //stack to store previous states
let redoStack = []; //stack to store states for redo

function setup() {
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new sprayCanTool);
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new Eraser());
	toolbox.addTool(new starStampTool()); //when stamp tool is implemented
	toolbox.addTool(new heartStampTool());
	toolbox.addTool(new spirographTool());

	//event listener for changes in the background color input element
	select('#bgColour').changed(() => {
		background(select('#bgColour').value());
	});

	//save the initial state
	saveState();
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a JavaScript function that tests if an object contains a particular method or property
	//if there isn't a draw method, the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("It doesn't look like your tool has a draw method!");
	}
}

function keyPressed(e) {
	//check if the event parameter (e) has the 'Z' key (keycode 90) and the control or command key
	if (e.keyCode == 90) {
		undo();
	} 
	//check if the event parameter (e) has the 'Y' key (keycode 90) and the control or command key
	else if (e.keyCode == 89 && (e.ctrlKey || e.metaKey)) {
		redo();
	}
}

function undo() {
	if (stateStack.length > 0) {
		//pop the previous state from the stack
		let previousState = stateStack.pop();

		//push the current state to the redo stack
		redoStack.push(get());

		//clear the canvas
		background(select('#bgColour').value());
		//draw the previous state
		image(previousState, 0, 0);
	}
}

function redo() {
	if (redoStack.length > 0) {
		//pop the next state from the redo stack
		let nextState = redoStack.pop();
		//push the current state to the undo stack
		stateStack.push(get());
		//clear the canvas
		background(select('#bgColour').value());
		//draw the next state
		image(nextState, 0, 0);
	}
}

function mousePressed() {
	//save the state when mouse is pressed
	saveState();
}

function saveState() {
	//save state by taking an image of the canvas
	let currentState = get();
	//push the current state to the stack
	stateStack.push(currentState);
}
