/** @format */

let secs = [10, 3, 5, 15, 9];
// let secs2 = [-1, 4, 8];
// let secs3 = [];
// let secs4 = ["hello"];

const timer = function(secs) {
  for (let num in secs) {
    if (num > 0 && typeof num === "number") {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, num * 500);
    }
  }
};
timer(secs);

//edge cases
// 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number
