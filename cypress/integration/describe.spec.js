/// <reference types="cypress" />

it.skip('A external test...', () => {

});

// describe é um grupo de teste
describe('Should group tests...', () => {
    
    // pode ter um grupo dentro de outro grupo
    describe('Should group more specific tests...', () => {
        // e pode ter testes dentro de grupos
        it('A specific test...', () => {

        });            
    });


    describe('Should group more specific tests 2...', () => {
        it.only('A specific test 2...', () => {

        });            
    });

    it.skip('A internal test...', () => {

    });

});