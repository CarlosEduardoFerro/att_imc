const resultado = document.querySelector("#resultado");

const Calcular = () => {
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);

    if (isNaN(peso) || isNaN(altura)) {
        resultado.innerHTML = `<p class="paragrafo">Preencha todos os campos!</p>`;
        return;
    }

    const pesoInvalido = peso <= 10 || peso >= 300;
    const alturaInvalida = altura < 1.20 || altura > 3;

    if (pesoInvalido && alturaInvalida) {
        resultado.innerHTML = `<p class="paragrafo">Peso e altura inválidos!</p>`;
        return;
    }

    if (pesoInvalido) {
        resultado.innerHTML = `<p class="paragrafo">Peso inválido!</p>`;
        return;
    }

    if (alturaInvalida) {
        resultado.innerHTML = `<p class="paragrafo">Altura inválida!</p>`;
        return;
    }

    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        window.alert(`Abaixo do peso. IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 18.5 && imc < 24.9) {
        window.alert(`Peso normal. IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 25 && imc < 29.9) {
        window.alert(`Sobrepeso. IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 30 && imc < 34.9) {
        window.alert(`Obesidade grau 1. IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 35 && imc < 39.9) {
        window.alert(`Obesidade grau 2. IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 40) {
        window.alert(`Obesidade grau 3. IMC: ${imc.toFixed(2)}`);
    }
};

const Limpar = () => {
    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
    resultado.innerHTML = "";
};

document.querySelector("#limpar").addEventListener("click", Limpar);
