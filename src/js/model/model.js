export const calcPercent = (denominator, numerator) => {
	const percent = (numerator / denominator) * 100;
	return isNaN(percent) ? 0 : percent;
}

export const calcPercentDiff = (valueA, valueB) => {
	let denominator = valueA > valueB ? valueA : valueB;
	let numerator = valueA < valueB ? valueA : valueB;

	const percent = Math.abs( ((denominator - numerator) / numerator) * 100);

	// const percent = 100 - ((numerator / denominator) * 100);
	return isNaN(percent) ? 0 : percent;
}