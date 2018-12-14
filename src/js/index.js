import 'bootstrap/dist/css/bootstrap.min.css';
import {DOMStrings} from './view/base';
import * as view from './view/view';
import * as model from './model/model';

const data = {
	pages: [
		{
			numVisitors: 0,
			numConversions: 0,
			percentage: 0
		},
		{
			numVisitors: 0,
			numConversions: 0,
			percentage: 0,
		}
	],
	percentageDiff: 0,
	winner: ''
};

const controller = () => {
	data.pages.forEach( (curr, index) => {
		const page = index ? 'B' : 'A';

		// 1. Get all input values
		curr.numVisitors = view.getInput(DOMStrings[`numVis${page}`]);
		curr.numConversions = view.getInput(DOMStrings[`numConv${page}`]);

		// 2. Get percentages of page A and B
		curr.percentage = model.calcPercent(curr.numVisitors, curr.numConversions);

	});

	// 3. Determine the percentage change
	data.percentageDiff = model.calcPercentDiff(data.pages[0].percentage, data.pages[1].percentage);

	// 4. Determine winner
	if (data.pages[0].percentage > data.pages[1].percentage) {
		data.winner = 'A';
	} else if (data.pages[0].percentage < data.pages[1].percentage) {
		data.winner = 'B';
	} else {
		data.winner = '';
	}

	// 5. Output all data to the screen
	view.outputData(data);
}

Array.from(document.querySelectorAll('.form-control')).forEach(elm => {
	elm.addEventListener('change', controller);
	elm.addEventListener('keyup', controller);
	elm.addEventListener('click', controller);
});
