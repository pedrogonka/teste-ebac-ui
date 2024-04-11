///<reference types="cypress"/>
import produtosPage from "../../support/Page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    

    it('Selecionar produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
            cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Taurus Elements Shell')
        cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Eos V-Neck Hoodie')
        produtosPage.addProdutoCarrinho('M','Blue', qtd)
            
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Eos V-Neck Hoodie” foram adicionados no seu carrinho.')
        
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
                    
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho, 
            dados[0].cor, 
            dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        })

        
    });

