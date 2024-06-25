import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Then('成功登入', () => {
  cy.url().should('include', '/courses')
})

Given('A', () => {
  expect(1 + 1).equal(2)
})

When('B', () => {
  expect(1 + 1).equal(2)
})

Then('C', () => {
  expect(1 + 1).equal(2)
})
