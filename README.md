# :christmas_tree: Advent of Code Starter :star2:
This repository provides starting code to get you set up for completing [Advent of Code](https://adventofcode.com/) puzzles using JavaScript.

## Quick Start
_For comprehensive instructions, see [Setting Up a Complete Project](#setting-up-a-complete-project)._
1. Copy `template.js`.
2. Modify `function process(input)` in the newly copied file.
3. Save your puzzle input to a text file.
3. Run your JavaScript file passing `-f` followed by the text file containing the puzzle input to load the data and run your code.

## Setting Up a Complete Project
0. Fork this reposity to your computer
1. Create a folder named after the current year.
  - This folder will be referred to as the `YEAR` directory in these instructions.
2. Save your puzzle input (accessable from the Daily Puzzle page ([sample](https://adventofcode.com/2022/day/1)) in a new file in a new folder called `YEAR/input`.
  - It is recommended to name the file after the date. For example, for 2022 Day 01, save the puzzle input in `2022/input/01.txt`
  - You can save the puzzle input by pressing `Ctrl+S` on the input page ([sample](https://adventofcode.com/2022/day/1/input)) or by creating a new text file and pasting in the input data.
    - Hint: if copying and pasting, be sure you are using UNIX ecoding for proper `\n` usage.
3. Copy `template.js` to a new file named after the date in the year directory.
  - You will need to update the import statement from `require("./util/inputParser")` to `require("../util/inputParser")`
  - For example, for 2022 day 01, copy `template.js` to `2022/01.js`
4. Write your solution code in `process(input)`.
5. Run to see the result with `node YEAR/JAVASCRIPT_FILE_NAME -f YEAR/input/DATA_FILE_NAME.txt`!
  - For example, for 2022 day 01, run `node 2022/01 -f 2022/input/01.txt`.
  - Alternatively, hardcode the path to file in the `cliInput.load()` call for the file. For example, `cliInput.load("2022/input/01.txt")` for 2022 day 01.
  - The output is what you will submit on the Advent of Code page.
Your final code structure will look like this:
```
project
│   template.js
│   ... (starting files)
│
└───2022
    │   01.js
    │   ... (other solution files)
	│
    └───input
        │   01.txt
        │   ... (other input files)
```

## Command-line Options
### Flags (modify inputParser.load()'s result)
- `-f PATH/TO/FILE`: Parses `PATH/TO/FILE`'s contents and into `inputParser.load()`'s `.then()` callback.
- `-t "SAMPLE INPUT"`: Passes the string `"SAMPLE INPUT"` into `inputParser.load()`'s `.then()` callback. Useful for debugging (you can use a smaller input to test functionality).
- `-d`: Enable debug mode, which will output information about the data being processed