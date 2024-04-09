///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    

    it('Selecionar produto da lista', () => {
        cy.get('.product-block ')
            .first()
            .click()

            cy.get('#tab-title-description > a').should('exist')
    });
});
