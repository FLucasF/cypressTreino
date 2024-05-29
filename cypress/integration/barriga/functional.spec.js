///<reference types="cypress" />


describe('Should test at funcional level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/');
        cy.get('[data-test=email]').type('a@a');
        cy.get('[data-test=passwd]').type('a');
        cy.get('.btn').click();
        cy.get('.toast').should('contain', 'Bem vindo');
    });

    it('Should create an account', () => {
        cy.get('[data-test=menu-settings]').click();
        cy.get('[href="/contas"]').click();
        cy.get('[data-test=nome]').type('Conta para teste');
        cy.get('.btn').click();
        cy.get('.toast').should('contain', 'Conta inserida com sucesso!');
      
    });

    it('Should update an account', () => {
        cy.get('[data-test=menu-settings]').click();
        cy.get('[href="/contas"]').click();
        cy.get(":nth-child(1) > :nth-child(2) > :nth-child(2) > .far").click();
        cy.get('.toast-message').should('contain', 'Conta excluída com sucesso')
    })
});
