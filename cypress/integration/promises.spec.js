it('Sem testes, ainda', () => {});

const getSomething = (callback) => {
    setTimeout(() => {
        callback(12);
    }, 1000);
};

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end');
}

system();