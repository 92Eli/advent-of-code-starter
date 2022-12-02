// Call by running `node YEAR/sample.js -f YEAR/input/FILE_DATA_HERE.txt`
// or pass the path to the file in the `loadInput()` method

const cliInput = require("../util/inputParser");

cliInput.load().then(res => {
	console.log(process(res));
}).catch(err => console.error("Errored:", err));

function process(input) {
	// solution logic goes here!
	return "???";
}