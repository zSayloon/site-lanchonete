$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000',{placeholder: '(00) 00000-0000'})
    
    $('#nome').attr('placeholder', 'Joseph Joestar')

    $('#email').attr('placeholder', 'email@email.com')
    
    $('#mensagem').attr('placeholder', 'Oii! Tudo bem?')

    $('form').validate({
        rules: {
            nome:{
                required: true,
            },
            telefone:{
                required: true,
            },
            email:{
                required: false,
                email: true,
            },
        },
        messages:{
            nome:"Não esqueça seu de digitar seu nome",
            telefone:"Não esqueça de colocar seu telefone",
            mensagem:"Não esquece de mandar uma mensagem",
        },

        submitHandler: function
        (form){
            alert("Sua Mensagem foi enviada, Obrigado pela preferência!");
            form.reset();
        },
        invalidHandler: function (form,validator){
            alert("Por Favor, preencha os campos para prossseguir!");
        }
    })
})





