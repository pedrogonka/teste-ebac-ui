///<reference types="cypress"/>

describe ('funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('pedro01teste@teste.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, pedro01teste (não é pedro01teste? Sair)')
    })

    it('deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('pedro01test@teste.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('pedro01teste@teste.com')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail pedro01teste@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });


  })

