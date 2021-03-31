// import logArrow from './script.js';

//my arrow console.log
const presentArrow = logArrow('num', '#fff');
const futureArrow = logArrow('time', '#000');
const redArrow = logArrow('even', '#9f4e64');
const greenArrow = logArrow('even', '#4e8f2c');
const defaultArrow = logArrow('odd');

//todo example 1 - console group and console groupCollabse

/**
 *? it just multiply ... duh
 *
 *  @input number , number
 *  @output number
 */

// function multiplyBy10(num, time) {
// 	if (time === 0) {
// 		return num;
// 	}
// 	// console.trace();
// 	redArrow(time);
// console.groupCollapsed(time);
// console.group('potato grouping');
// console.log(time);
// console.log(num);
// console.groupEnd();
// console.groupCollapsed('potato grouping');

// 	return 10 * multiplyBy10(num, time - 1);
// }

// multiplyBy10(20, 5);

//? where am i with console trace

// function multiplyBy10While(num, time) {
// 	while (time) {
// 		num *= 10;
// 		time -= 1;

// 	}
// 	outside();
// 	return num;
// }
// //? just a function that have a function that is invoked inside of it ...
// function outside() {
// 	function inside() {
// 		console.trace('I am just here for the console dot trace (╯‵□′)╯︵┻━┻');
// 	}
// 	inside();
// }
// multiplyBy10While(10, 3);

//todo example 2 - console time, timeEnd and timelog

//! 1 with recursion

// function multiplyBy10(num, time) {
// 	console.time('inside recursion');
// 	if (time === 0) {
// 		return num;
// 	}
// 	redArrow(num);
// 	return multiplyBy10(num * 10, time - 1);
// }

// console.time('with recursion');
// multiplyBy10(20, 5);
// console.timeEnd('with recursion');

//! 2 with with iteration

// function multiplyBy10While(num, time) {
// 	while (time) {
// 		// console.time('inside While');

// 		num *= 10;
// 		time -= 1;
// 		// console.timeEnd('inside While');
// 	}
// 	return num;
// }

// console.time('with while');
// multiplyBy10While(20, 5);
// console.timeEnd('with while');

//todo example 3 - personalise the console.log !!

// function even(n) {
// 	var x = 0;
// 	while (x <= n) {
// 		if (x % 2 === 0) {
// 			redArrow(x);
// 		} else {
// 			defaultArrow(x);
// 		}
// 		x++;
// 	}
// }
// even(50);

//! fuzz buzz for test

// function fuzzbuzz(n) {
// 	for (let i = 1; i < n; i++) {
// 		const fuzz = !(i % 3),
// 			buzz = !(i % 5);
// 		if (fuzz && buzz) {
// 			console.log('FizzBuzz');
// 		} else if (fuzz) {
// 			console.log('Fizz');
// 		} else if (buzz) {
// 			console.log('Buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }
// fuzzbuzz(20);
// var searchNodes = function (nodes) {
// 	for (var i = 0; i < nodes.length; i++) {
// 		var node = node[i];
// 		if (node === undefined) {
// 			debugger;
// 		}
// 		if (node.classList && node.classList.contains(className)) {
// 			XPathResult.push(node);
// 		}
// 	}
// };
