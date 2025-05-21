const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e){
    e.preventDefault(); //impede o envio padrão do formulario

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA){
        mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A!';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        mensagem.style.color = 'red';
    }
});