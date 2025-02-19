function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const mensagemErro = document.getElementById('mensagemErro');
    const resultado = document.getElementById('resultado');

    mensagemErro.textContent = '';
    resultado.textContent = '';

    if (!peso || !altura) {
        mensagemErro.textContent = 'Preencha todos os campos obrigatórios.';
        return;
    }

    if (isNaN(peso) || isNaN(altura)) {
        mensagemErro.textContent = 'Insira apenas números válidos.';
        return;
    }

    if (peso < 10 || peso > 300 || altura < 0.5 || altura > 2.5) {
        mensagemErro.textContent = 'Insira valores válidos para peso e altura.';
        return;
    }

    const imc = peso / (altura * altura);
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}.`;

    if (imc < 18.5) {
        resultado.textContent += ' Classificação: Abaixo do peso.';
    } else if (imc < 24.9) {
        resultado.textContent += ' Classificação: Peso normal.';
    } else if (imc < 29.9) {
        resultado.textContent += ' Classificação: Sobrepeso.';
    } else if (imc < 34.9) {
        resultado.textContent += ' Classificação: Obesidade grau 1.';
    } else if (imc < 39.9) {
        resultado.textContent += ' Classificação: Obesidade grau 2.';
    } else {
        resultado.textContent += ' Classificação: Obesidade grau 3.';
    }
}

function limparCampos() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('mensagemErro').textContent = '';
}
