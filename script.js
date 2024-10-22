// Referencia o contêiner onde o texto será inserido
const container = document.querySelector('.container');

// Define o número de linhas e colunas
const rows = 10;
const cols = 3;

// Texto que será exibido
const text = "I LOVE YOU ❤️";

// Função para criar as mensagens
function createMessages() {
    for (let i = 0; i < rows * cols; i++) {
        const message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML = text;
        container.appendChild(message);
    }
}

// Função para animar o texto
function animateMessages() {
    const messages = document.querySelectorAll('.message');
    let index = 0;

    function showMessage() {
        if (index < messages.length) {
            messages[index].classList.add('visible');
            index++;
            setTimeout(showMessage, 300); // Atraso de 300ms entre cada animação
        }
    }

    showMessage();
}

// Cria as mensagens e inicia a animação
createMessages();
animateMessages();
