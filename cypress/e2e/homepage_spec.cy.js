describe('When I visit the page I should see a title, form and collection of reservations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'reservation'}).as('reservation')
    cy.visit('http://localhost:3000/')
    cy.wait('@reservation').then(() => {
      'response.ok'
    })
  })
  it('should be able to fill in a form and submit successfully', () => {
    cy
    .get('.app-title').contains('Turing Cafe Reservations')
    .get('h3').contains('Christie')
    .get('.card').should('exist')
    .get('.name').type('test')
    .get('button').click()

  })
})