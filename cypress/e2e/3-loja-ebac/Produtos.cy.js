///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    

    it('Selecionar produto da lista', () => {
        cy.get('.product-block ')
            .first()
            .click()

            cy.get('#tab-title-description > a').should('exist')
    });
});
