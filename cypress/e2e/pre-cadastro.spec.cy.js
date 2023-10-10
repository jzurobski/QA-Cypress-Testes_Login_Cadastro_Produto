/// <reference types="cypress" />

// Neste teste devemos validar o cadastro do usuário no site EBAC

describe('Funcionalidade do Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve realizar o login', () => {


        cy.get('#username').type('teste')
        
    });
 });