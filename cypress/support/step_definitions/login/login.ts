import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { navigateToURL } from '../../resources/commonFunctions';
import { loginUrl, loginDashboardUrl } from '../../resources/commonStrings';

describe('As a user, I want to login into application with a valid credentials', () => {
	Given('user has browse to the application sucessfully', () => {
		navigateToURL(loginUrl);
		cy.url().should('include', 'practicetestautomation');
	});

	When('the user has enter a username as {string}', (name) => {
		cy.get('#username').type(name);
	});
	And('the user has enter a password as {string}', (password) => {
		cy.get('#password').type(password);
	});
	And('the user clicks on button {string}', (btnText) => {
		cy.get('#submit').click({ force: true });
	});

	Then('user can see the application dashboard', () => {
		cy.url().should('eq', loginDashboardUrl);
	});
	And('user can see message as {string}', (message) => {
		cy.get('.post-title').invoke('text').should('eq', message);
	});
});

// for scenario outline
describe('As a user, I want to login into application with a invalid credentials', () => {
	Then('user can see error message as {string}', (message) => {
		cy.get('#error').invoke('text').should('eq', message);
	});
});
