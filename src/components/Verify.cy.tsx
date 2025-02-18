import React from 'react'
import Verify from './Verify'

describe('<Verify />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Verify />)
  })
})