/// <reference types="cypress" />

// Para este teste utilizar o usuário: aluno_ebac@teste.com e senha: teste@teste.com

const { faker } = require('@faker-js/faker');

let primeiro_nome = faker.name.firstName()
let senha = faker.internet.password()

describe('Funcionalidade da Tela de Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1)').should('contain', 'Welcome aluno_ebac20Nome de Exibição')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac20Nome de ExibiçãoNome de Exibição')
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2)').should('contain', 'Logout')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').should('contain', 'Detalhes da conta')
    });
    it('Deve apresentar um erro ao digitar o usuário ou email inválidos', () => {
        cy.get('#username').type(primeiro_nome)
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', primeiro_nome + ' não está cadastrado neste site')
    });
    it('Deve apresentar um erro ao digitar a senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail ')
    });

});