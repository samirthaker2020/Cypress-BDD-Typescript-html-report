const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json', // ** Path of .json file **//
	reportPath: './cypress/htmlReports',
	reportSuiteAsScenarios: true,
	openReportInBrowser: true,
	launchBrowser: true,
	saveCollectedJSON: false,
	reportName: 'Cypress-BDD-HTML-Reporter',
	displayDuration: true,
	// durationInMS:true,
	displayReportTime: true,
	metadata: {
		brandTitle: 'E2E Report',
		name: 'Cypress-BDD-Demo',
		browser: {
			name: 'chrome',
			version: '110.0.5481.100 ',
		},
		device: 'Local test machine',
		platform: {
			name: 'Mac',
			version: 'macOS Ventura 13.2',
		},
	},
	customData: {
		title: 'E2E Test Report',
		data: [
			{ label: 'Project', value: 'Cypress-BDD-Demo' },
			{ label: 'Release', value: '1.0' },
		],
	},
});
