/// <reference types="cypress" />


// Neste teste devemos validar o comportamento da interação com produtos

var valor_carrinho = 7
var wishlist = 1


describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Selecionando um produto e adicionando no carrinho', () => {
        cy.get('[class="product-block grid"]')
            .eq(0)
            .click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(valor_carrinho)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', valor_carrinho)
        cy.get('.woocommerce-message').should('contain', valor_carrinho + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
    it('Inserindo e removendo produto na wishlist', () => {
        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2) > span').click()
        cy.get('#yith-wcwl-message').should('contain', 'Produto adicionado!')
        cy.get(':nth-child(2) > .text-skin > .count_wishlist').should('contain', wishlist)
        cy.get('.yith-wcwl-wishlistaddedbrowse').click()
        cy.get('#yith-wcwl-row-2622 > .product-stock-status').should('contain', 'In Stock')
        cy.get('.remove > .fa').click()
        cy.get('.wishlist-empty').should('contain', 'No products were added to the wishlist')
    });
});
