const calcularGorjeta = () => {
    const totalConta = parseFloat(document.getElementById('totalConta').value);
    const qualidadeServico = document.getElementById('qualidadeServico').value;

    if (isNaN(totalConta) || totalConta <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido para a conta.';
        return;
    }

    const calcularPercentual = (qualidade, callback) => {
        let percentual;
        switch (qualidade) {
            case 'bom':
                percentual = 0.20;
                break;
            case 'regular':
                percentual = 0.10;
                break;
            case 'ruim':
                percentual = 0.05;
                break;
            default:
                percentual = 0;
        }
        callback(percentual);
    };

    calcularPercentual(qualidadeServico, (percentual) => {
        const gorjeta = totalConta * percentual;
        document.getElementById('resultado').innerText = `A gorjeta é R$ ${gorjeta.toFixed(2)}`;
    });
};