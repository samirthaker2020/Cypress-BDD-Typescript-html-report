/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config);
		},
		//excludeSpecPattern: '*.ts',
		specPattern: '**/*.feature',
		experimentalWebKitSupport: true,
	},
	// videoCompression: 15,
	// videoCompression: false,
});
