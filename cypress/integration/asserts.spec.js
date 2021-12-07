/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1); // expect verifica a igualdade de um elemento em relação a um valor
    expect(a, 'Deveria ser 1').equal(1); // O segundo parametro é a mensagem a ser exibida caso de erro
    expect(a).to.be.equal(1); // esperava que a fosse igual a 1
    expect('a').not.to.be.equal('b'); // esperava que a n fosse igual a b
});

it('Trusthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;   //espara que "a" seja true
    expect(true).to.be.true;   //espara que "a" seja true
    expect(b).to.be.null;   // espera que "b" seja null
    expect(a).to.be.not.null;   // espera que "a" não seja null
    expect(c).to.be.undefined;  //espera que "c" seja undefined
});

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal({ a: 1, b: 2 });   // verifica as propriedades do objeto para ver se são iguais
    expect(obj).eql({a: 1, b: 2});  // mesma coisa da linha de cima
    expect(obj).include({a: 1});    // verifica se a propriedade tem o valor passado
    expect(obj).to.have.property('b');  // verifica se possui a propriedade "b"  
    expect(obj).to.have.property('b', 2);  // verifica se possui a propriedade "b", e se o valor é 2  
    expect(obj).to.not.be.empty;    // verifica se o obj não está vazio
    expect({}).to.be.empty; // verifica se está vazio
});

it('Arrays', () => {
    const arr = [1,2,3];
    expect(arr).to.have.members([1,2,3]);   // verifica se o array tem os membros passados
    expect(arr).to.include.members([1, 3]); // verifica se possui esses membros
    expect(arr).to.not.empty;   // verifica se não está vazio
    expect([]).to.be.empty; // verifica se está vazio
});

it('Types', () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number');  // verifica o tipo da variável
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
});

it('String', () => {
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/^String/);
    expect(str).to.match(/teste$/);
    expect(str).to.match(/.{15}/);
    expect(str).to.match(/\w+/);
    expect(str).to.match(/\D+/);
});

it('Numbers', () => {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);  // verifica se é maior
    expect(number).to.be.below(7);  // verifica se é menor
    expect(floatNumber).to.be.equal(5.2123);
    expect(floatNumber).to.be.closeTo(5.2123, 0.1);  // verifica se é próximo do valor passado
    expect(floatNumber).to.be.above(5);
});