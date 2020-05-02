console.log('Javascript carregado');

function validaCPF(cpf) {
    if(cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);  //A partir do 0, eu quero pegar 9 caracteres
        var digitos = cpf.substring(9);

        var soma = 0;
        for(var i = 10; i > 1; i --) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);
        
        return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF');
    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}