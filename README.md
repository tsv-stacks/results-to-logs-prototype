convert calculation.js to class constructor

html/css
project code date analyst

modal
agar spread/pour
batch code
date & times
indicator
no. of samples single, duplicate, triplicate(default)

html css grid to make results sheet
input check. if undefined or not T or sp then error

array of objects to store results

calculate split into:

1. input cleaning to usable format
2. pass through dilutions and convert to array
3. use dilutions array to calculate results
4. input to results
5. results to logs

future

1. custom dilutions and calculations
2. contamination
3. spread plate option
4. if no results are within limits
5. Highlight calculations used for dilutions
6. Add 'tab' to each input
7. Add 'enter' to perform calculation
8. Webpack to allow code to run in browser and node env

### Calculation Loop functionality

(only tick if function and jest has been tested)

- [x] detects if all zeroes and outputs "<10e" or "<1e"
- [ ] if count is less than 10 and next count it not 0, then return both or closest to samples
- [ ] if count is on final dilution use for calculation
- [ ] correctly perform calculation
- [ ] collate results and only return the highest value
- [ ] skip calculation if out of range but use if final one
- [ ] write a bunch of jest tests for different scenarios and test
