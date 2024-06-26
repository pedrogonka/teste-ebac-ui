///<reference types="cypress"/>
const Perfil = require('../../fixtures/Perfil.json')


describe ('funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('pedro01teste@teste.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, pedro.qa (não é pedro.qa? Sair)')
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

    it('Deve fazer login com sucesso usando massa de dados', () => {
        
        cy.get('#username').type(Perfil.usuario)
        cy.get('#password').type(Perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, pedro.qa (não é pedro.qa? Sair)')
    });

    it('Deve fazer login com sucesso usando fixture', () => {
            cy.fixture('Perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, pedro.qa (não é pedro.qa? Sair)')
        })
    });

    it('Deve fazer login com sucesso usando comandos customizados', () => {
        cy.login('pedro01teste@teste.com', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, pedro.qa (não é pedro.qa? Sair)')
    });
   


  })

