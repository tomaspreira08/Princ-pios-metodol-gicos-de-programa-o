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


/*texto a aparecer suavemente*/
document.addEventListener('scroll', function () {
    var mainTitle = document.querySelector('.main-title');
    var headingsAndImages = document.querySelectorAll('#content h2, #content h1, #content img');

    toggleVisibility(mainTitle, false); // Não adicionar 'visible' ao mainTitle

    headingsAndImages.forEach(function (element) {
        toggleVisibility(element);
    });
});

function toggleVisibility(el, excludeMainTitle = true) {
    if (excludeMainTitle && el.classList.contains('main-title')) {
        return; // Ignorar o título principal se excludeMainTitle for verdadeiro
    }

    if (isElementPartiallyInViewport(el)) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
}

function isElementPartiallyInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}
