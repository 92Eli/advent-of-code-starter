# :christmas_tree: Advent of Code Starter :star2:
This repository provides starting code to get you set up for completing [Advent of Code](https://adventofcode.com/) puzzles using JavaScript.

## Getting Started
1. Rename the `YEAR` folder to the current year.
  - Whenever the `YEAR` folder is referenced in these instructions, use the current year instead.
2. Save your starter code (accessable from the Daily Puzzle page ([sample](https://adventofcode.com/2022/day/1/input)) in the a new file in the `YEAR/input` folder.
  - It is recommended to name the file after the date. For example, for 2022 Day 01, save the starter code in `2022/input/01.txt`
  - You can save this by pressing `Ctrl+S` on the input page or by creating a new text file and pasting in the input data.
    - Hint: be sure you are using UNIX ecoding for proper `\n` usage.
3. Copy `YEAR/template.js` to a new file named after the date.
  - For example, for 2022 day 01, copy `YEAR/template.js` to `2022/01.js`
4. Write your solution code in `process(input)`.
5. Run to see the result with `node YEAR/sample.js -f YEAR/input/FILE_DATA_HERE.txt`!
  - Alternatively, hardcode the path to file in the `cliInput.load()` call for the file. For example, `cliInput.load("2022/input/01.txt")` for 2022 day 01.

## Command-line Options
### Flags (modify inputParser.load()'s result)
- `-f PATH/TO/FILE`: Parses `PATH/TO/FILE`'s contents and into `inputParser.load()`'s `.then()` callback.
- `-t "SAMPLE INPUT"`: Passes the string `"SAMPLE INPUT"` into `inputParser.load()`'s `.then()` callback. Useful for debugging (you can use a smaller input to test functionality).
- `-d`: Enable debug mode, which will output information about the data being processed