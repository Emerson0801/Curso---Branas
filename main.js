    //Janeiro
        salario1 = 3000 
        gastosGeral = 1000
        saldo1 = (salario1 - gastosGeral) // janeiro
        console.log("janeiro")
        console.log(saldo1)
        estaNegativo1 = (saldo1 < 0)
        console.log("Esta negativo ?")
        console.log(estaNegativo1)

        if (estaNegativo1) {
            console.log("Cuidado, voce esta no vermelho")
        } else {
            console.log("Parabens, voce esta no azul")
        }

        if (estaNegativo1) {
            console.log("Juros em Janeiro")
            juros1 = (saldo1 * 0.1)
            console.log(juros1)
            saldo1 = (saldo1 + juros1)
            console.log(saldo1)
        } else {
            console.log("Rendimento em Janeiro")
            rendimentos1 = (saldo1 * 0.005)
            console.log(rendimentos1)
            saldo1 = (saldo1 + rendimentos1)
        }
        console.log("Saldo com juros ou rendimentos")
        console.log(saldo1)
    //Fevereiro
        salario2 = 3000
        gastosGeral2 = 3500
        saldo2 = (salario2 - gastosGeral2) // fevereiro
        console.log("fevereiro")
        console.log(saldo2)
        estaNegativo2 = (saldo2 < 0)
        console.log("Esta negativo ?")
        console.log(estaNegativo2)

        if (estaNegativo2) {
            console.log("Cuidado, voce esta no vermelho")
        } else {
            console.log("Parabens, voce esta no azul")
        }

        if (estaNegativo2) {
            console.log("Juros em Fevereiro")
            juros2 = (saldo2 * 0.1)
            console.log(juros2)
            saldo2 = (saldo2 + juros2)
        } else {
            console.log("Rendimento em Fevereiro")
            rendimentos2 = (saldo2 * 0.005)
            console.log(rendimentos2)
            saldo2 = (saldo2 + rendimentos2)
        }
        console.log("Saldo com juros ou rendimentos")
        console.log(saldo2)
        
    //como calcular o acumulado do ano ? 
        acumuladoAno = (saldo1 + saldo2) 
        console.log("Ano")
        console.log(acumuladoAno)