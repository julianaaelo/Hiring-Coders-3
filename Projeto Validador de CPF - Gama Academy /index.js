function validacaoCpf(cpf) {
    if(cpf.length != 11) {
        return false;
     } else {
         
        //A função substring nos retorna os valores dentro de uma espaço determinado;
        var numeros = cpf.substring(0, 9);
        var digito = cpf.substring(9);

                        
        // variável de incremento;
        var soma = 0;

        for(var i = 10; i > 1; i--) {
            //A função charAt nos retorna a posição da sting na lista;
            soma += numeros.charAt(10 - i) * i;
        }
        
        
        // Ternário: condição ? se verdadeira : se falsa;
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
       
        // Validação Primeiro Dígito;
        
        if (resultado != digito.charAt(0)) {
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0, 10);

        for(var k = 1; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
         resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
            //validação segundo dígito;
        if(resultado != digito.charAt(1)) {
            return false;
        }

        return true;
//     
         
    }  
}

function validacao() {
   var cpf = document.getElementById("cpf_Digitado").value;
   var resultadoValidacao = validacaoCpf(cpf);

   if(resultadoValidacao) {
       document.getElementById("success").style.display = 'block'
   } else {
       document.getElementById("error").style.display = 'block'
   };
}