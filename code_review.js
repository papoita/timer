/** @format */

const secs = process.argv.slice(2);

const beep = () => {
	process.stdout.write("\x07");
};

const timer = function (secs) {
	for (let num of secs) {
		const isPositive = num > 0;
		const isNum = typeof num === "number";

		const delay = num * 500;

		if (isPositive && isNum) {
			setTimeout(() => {
				beep();
			}, delay);
		}
	}
};
timer(secs);

/**
 * Overall, awesome work on this timer, testing edge cases, readability and explaining your code well.
 * Suggestions:
 * 1. Please remove test code or comments before submitting code
 * 2. Try utilizing variables to improve readability
 * 3. Please remove comments that is explaining your code. Comments can be used to explain something unique.
 * - Rule of Thumb: if you're writing comments to explain your code, then it needs to be refactored.
 * 4. use `const` instead of `let`
 * - be aware of data type
 * 5. Break down functions into single responsibility.
 * 6. `for of` of array
 */

///////////
//alternative to allow each function to do a specific action: maing the code more readable and reusable
//also make it more readable by using variables( remeber the importance of const vs let)
//also use for loop of let fo and not for in because it is an array
//this uses an anonymous function as a cb
const secs = process.argv.slice(2);

const timer = function (secs, callback) {
	for (let num of secs) {
		const delay = num * 500;
		const isPositive = num > 0;
		const isNum = typeof num === "number";

		if (isPositive && isNum) {
			setTimeout(() => {
				callback();
			}, delay);
		}
	}
};

timer(secs, () => process.stdout.write("\x07"));

/////////
//alternative 2
const play = () => {
	// process.stdout.write("."); //if doens't make the sound to test use console.log
	//the use of Number to allow fo decimal inputs becaus eit will round up
	console.log(".");
};

const scheduleBeep = (delay) => {
	const num = Number(delay);
	const isNum = Number.isInteger(num);
	const isPositive = num > 0;

	if (isNum && isPositive) {
		setTimeout(() => {
			play();
		}, num);
	}
};

const numbers = process.argv.slice(2);
for (const num of numbers) {
	scheduleBeep(num);
}
