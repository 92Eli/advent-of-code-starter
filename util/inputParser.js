// Loads input
// (example) to parse file.txt:
// node file -f file.txt

// todo: make a way to pull directly from website
// (by full url or short one)
// ex: https://adventofcode.com/2022/day/1/input
// todo: make a way to directly submit input (pass -s to submit the output)

const fs = require("fs/promises");

const FILE_FLAG = "f"; // read a file
const INPUT_FLAG = "t"; // read text directly
const DEBUG_FLAG = "d"; // show debug messages

let debug = false;

function d(...obj) {
	if (debug) {
		console.log(...obj);
	}
}

function readFile(filePath) {
	return new Promise((res, rej) => {
		d(`Reading file ${filePath}...`);
		fs.readFile(filePath, { encoding: "utf8" })
			.then(data => {
				d(`Read ${data.split("\n").length} lines.`);
				res(data);
			})
			.catch(err => {
				d(`Failed to read ${filePath}.`, err);
				if (err.code === "ENOENT") {
					rej("Passed path to file does not exist or does not have adequate permission levels.");
				} else if (err.code === "EISDIR") {
					rej("Passed path is a directory, not a file.");
				} else {
					rej("There was an error reading the file.");
				}
			});
	});
}

function getFlag(flag) {
	if (flag.substring(0, 1) !== "-") {
		flag = "-" + flag;
	}
	// start at index 2 to remove node and FILE.js arguments (or .slice(2))
	for (let i = 2; i < process.argv.length; i++) {
		if (process.argv[i] === flag) {
			if (i < process.argv.length - 1 && process.argv[i + 1].substring(0, 1) !== "-") {
				return process.argv[i + 1];
			} else {
				// flag at least exists
				return true;
			}
		}
	}
	return null;
}

module.exports = {
	load: (fileToRead) => {
		return new Promise((res, rej) => {
			if (fileToRead != null) {
				// read from passed argument
				d("Found file path from passed argument.");
			} else {
				// read file from args
				if (getFlag(DEBUG_FLAG)) {
					debug = true;
				}
				
				const potentialFileToLoad = getFlag(FILE_FLAG);
				if (potentialFileToLoad !== null && typeof(potentialFileToLoad) === "string") {
					fileToRead = potentialFileToLoad;
					d("Found file path from CLI args.");
				} else {
					const potentialTextInputToLoad = getFlag(INPUT_FLAG);
					if (potentialTextInputToLoad != null && typeof(potentialTextInputToLoad) === "string") {
						d("Found direct text input.");
						d(); // newline
						// make newlines real for debugging
						res(potentialTextInputToLoad.replaceAll("\\n", "\n"));
						return; // done
					}
				}
			}
			
			if (fileToRead != null) {
				readFile(fileToRead).then(data => {
					d(); // newline
					res(data);
				}).catch(err => rej(err));
			} else {
				rej(`Failed to find file to load. Make sure to use the -${FILE_FLAG} flag followed by the path to the file or -${INPUT_FLAG} flag followed by direct text input.`);
			}
		});
	},
	getFlag,
};