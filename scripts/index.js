const form = document.getElementById('form')


function getDataForm(event) {
    event.preventDefault();  

    const destinatario = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    form.reset()

    sendEmail(name, destinatario)
}
form.addEventListener("submit", getDataForm);


function sendEmail(name, destinatario){

        const dadosEmail = {
        destinatario: destinatario,
        assunto: 'Bem vindo a ATS',
        corpo: `Olá, ${name}, bem vindo a ATS. em breve entraremos em contato com voce!`,
        };

        fetch('http://localhost:3000/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosEmail),
        })
        .then(response => response.text())
        .then(data => {

            if(data === 'Erro ao enviar o e-mail.'){
                alert('Erro ao enviar email')
            }else{
                console.log("O formulário foi submetido!");
            }
            
        })
        .catch(error => alert.error('Erro:', error));


}

