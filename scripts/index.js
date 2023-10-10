console.log(document.getElementsByClassName('form__form'))


function enviarEmail(){
    const dadosEmail = {
    destinatario: 'joaomarcoscacula88@gmail.com',
    assunto: 'Assunto do E-mail',
    corpo: 'Corpo do E-mail em texto simples',
    };

    fetch('http://localhost:3000/enviar-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosEmail),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
}

