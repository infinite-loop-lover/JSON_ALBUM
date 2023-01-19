describe('The Home Page', () => {
    beforeEach('UserAPI', () => cy.request('http://jsonplaceholder.typicode.com/users').as('users'))
    it('GET', () => {
        cy.get('@users').its('status').should('be.equal', 200);
        cy.get('@users').its('body').should('have.length', 10);
        cy.get('@users').its('body').its('0').should('include', { email: "Sincere@april.biz" });
        cy.get('@users').its('body').its('7').its('phone').should('be.equal', '586.493.6943 x140');
    })
    it('successfully loads', () => {
        cy.visit('/')
        cy.contains('View Albums').click()
        cy.url().should('include', '/albums')
        cy.contains('View Photos').click()
        cy.url().should('include', '/photos')
    })
})

