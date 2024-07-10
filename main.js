const validadeFormulario = false;
const form = document.getElementById('formulario');
let formularioEValido = false;
const mensagemDeErro = document.getElementById('mensagemErro')
const mensagemDeSucesso = document.getElementById('mensagemSucesso')
mensagemDeErro.classList.add('nosee')
mensagemDeSucesso.classList.add('nosee')

function checkformulario(a, b) {
    return b>a;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const a = document.getElementById('numA')
    const b = document.getElementById('numB')
    const mensagemDeErro = document.getElementById('mensagemErro')
    const mensagemDeSucesso = document.getElementById('mensagemSucesso')

    
    formularioEValido = checkformulario(a.value, b.value)
    if (formularioEValido) {
        mensagemDeSucesso.innerHTML = `O número ${b.value} é maior que o número ${a.value}. Formulário Enviado com Sucesso!` 
        mensagemDeSucesso.classList.remove('nosee')
        mensagemDeErro.classList.add('nosee')
        a.value = '';
        b.value = '';
    } else{
        mensagemDeErro.classList.remove('nosee')
        mensagemDeSucesso.classList.add('nosee')
        
    }
})