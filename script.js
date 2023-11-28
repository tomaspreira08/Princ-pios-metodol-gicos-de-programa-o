document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento de clique ao botão
    document.getElementById('toggle-mode-btn').addEventListener('click', function () {
        // Alterna entre light mode e dark mode
        document.body.classList.toggle('dark-mode');

        // Obtém o elemento do botão
        var toggleBtn = document.getElementById('toggle-mode-btn');

        // Altera o texto do botão com base no modo atual
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

        // Altera a cor do botão com base no modo atual
        toggleBtn.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#ffffff' : '#000000';
        toggleBtn.style.color = document.body.classList.contains('dark-mode') ? '#000000' : '#ffffff';
    });
});