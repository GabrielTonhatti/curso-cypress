/// <reference types="cypress" />

describe('Cypress basics', () => {

    it('Should visit a page and asset title', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        //const title = cy.title();
        //console.log(title);

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');

        //TODO imprimir o loo no console
        //TODO escrever o log em um campo de texto
    });

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').click();
    });
});