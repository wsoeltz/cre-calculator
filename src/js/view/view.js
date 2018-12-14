import {DOMStrings} from './base';

const formatNum = num => {
	let newNum = num.toFixed(2);
	const altNum = Math.round(num);
	if (num === Infinity) {
		return '∞';
	}
	if (newNum/altNum === 1 || altNum === 0) {
		newNum = altNum;
	}
	return newNum;
}

export const getInput = input => document.querySelector(input).value;

export const outputData = data => {
	let winnerText = '';

	data.pages.forEach( (curr, index) => {
		const page = index ? 'B' : 'A';
		document.querySelector(DOMStrings[`convRate${page}`]).innerHTML = `${formatNum(curr.percentage)}%`;
	});

	if (data.winner === '') {
		winnerText = 'Both pages are performing the same.';
	} else {
		winnerText = `Page ${data.winner} is performing ${formatNum(data.percentageDiff)}% better.`;
	}

	document.querySelector(DOMStrings.results).innerHTML = winnerText;
}