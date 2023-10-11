/// <reference types="cypress" />

// Neste teste devemos validar o cadastro do usuário no site EBAC

const { faker } = require('@faker-js/faker');

let primeiro_nome = faker.name.firstName()
let sobrenome = faker.name.lastName()
let password = faker.internet.password()
let email = faker.internet.email(primeiro_nome)

describe('Funcionalidade do Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve realizar o cadastro do usuário e o cadastro dos detalhes da conta', () => {

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes,')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiro_nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
         
    });
});