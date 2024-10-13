function solicitarNumero() {
    return prompt("Introduce un número:");
}

function esNumeroValido(valor) {
    return !isNaN(valor) && valor >= 0;
}

function generarSerieFibonacci(n) {
    const fibonacci = [0, 1];
    
    for (let i = 2; i < n; i++) {
        const siguienteNumero = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(siguienteNumero);
    }
    
    return fibonacci.slice(0, n); 
}

function mostrarResultado(serie) {
    console.log(serie.join(", "));
    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Serie de Fibonacci: " + serie.join(", ");
}


let numero = solicitarNumero();

while (!esNumeroValido(numero)) {
    alert("Error: Debes ingresar un número válido.");
    numero = solicitarNumero();
}

const fibonacciSerie = generarSerieFibonacci(Number(numero));
mostrarResultado(fibonacciSerie);
