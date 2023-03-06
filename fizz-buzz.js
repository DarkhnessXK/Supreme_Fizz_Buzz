function FizzBuzz(quantidade) {
    for (var contador = 1; contador <= quantidade; contador++) {
        
        var resultado = "";
        if (contador % 3 == 0) { resultado += "Fizz"; }
        if (contador % 5 == 0) { resultado += "Buzz"; }
        if (contador % 7 == 0) { resultado += "Bazz"; }
        if (contador % 11 == 0) { resultado += "Fazz"; }
        if (contador % 13 == 0) { resultado += "Fuzz"; }

        if (resultado == "") { resultado = contador; }
        console.log(resultado);

    }
}

FizzBuzz(100);
