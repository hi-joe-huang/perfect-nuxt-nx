import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('Counter Default', () => {
  cy.visit('/about', {failOnStatusCode: false})
  cy.get('[data-cy="counter-number"]').should('have.text', '1')
})

When('Counter Add', () => {
  cy.get('[data-cy="counter-add"]').click()
})

Then('Counter Should Add 1', () => {
  cy.get('[data-cy="counter-number"]').should('have.text', '2')
})

Then('Counter Subtract', () => {
  cy.get('[data-cy="counter-subtract"]').click()
})

Then('Counter Should Subtract 1', () => {
  cy.get('[data-cy="counter-number"]').should('have.text', '0')
})
