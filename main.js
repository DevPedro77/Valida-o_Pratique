$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: 'required',
            telefone: 'required',
            cep: 'required',
            email: {
                required: true,
                email: true
            },
            CPF: 'required',
            endereco: 'required',
            mensagem: 'required'
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira um telefone válido',
            cep: 'Por favor, insira um CEP válido',
            email: {
                required: 'Por favor, insira um e-mail',
                email: 'Por favor, insira um e-mail válido'
            },
            CPF: 'Por favor, insira um CPF válido',
            endereco: 'Por favor, insira o seu endereço',
            mensagem: 'Por favor, insira uma mensagem'
        },
        submitHandler: function(form) {
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    });
});
