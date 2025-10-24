// Array de músicas com suas informações
const musicas = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da"
    },
    {
        titulo: "Billie Jean",
        artista: "Michael Jackson",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0"
    },
    {
        titulo: "Imagine",
        artista: "John Lennon",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273872d05a81f9b89d4e06ed1c1"
    },
    {
        titulo: "Sweet Child O' Mine",
        artista: "Guns N' Roses",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273e44963b8bb124f6de285909f"
    },
    {
        titulo: "Stairway to Heaven",
        artista: "Led Zeppelin",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69"
    }
];

// Função para criar o HTML de cada card de música
function criarCardMusica(musica) {
    return `
        <div class="musica-card">
            <div class="musica-img">
                <img src="${musica.capaUrl}" alt="Capa do álbum ${musica.titulo}">
                <button class="play-btn"><i class="fas fa-play"></i></button>
            </div>
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        </div>
    `;
}

// Função para renderizar todas as músicas
function renderizarMusicas() {
    const containerMusicas = document.getElementById('lista-de-musicas');
    const htmlMusicas = musicas.map(criarCardMusica).join('');
    containerMusicas.innerHTML = htmlMusicas;

    // Adiciona evento de clique nos botões de play
    document.querySelectorAll('.play-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o clique propague para o card
            console.log(`Tocando: ${musicas[index].titulo} - ${musicas[index].artista}`);
            // Aqui você pode adicionar a lógica para tocar a música
        });
    });
}

// Aguarda o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um pequeno efeito de animação ao título
    const titulo = document.querySelector('h1');
    titulo.style.opacity = '0';
    setTimeout(() => {
        titulo.style.transition = 'opacity 1s ease-in';
        titulo.style.opacity = '1';
    }, 500);

    // Renderiza as músicas
    renderizarMusicas();

    // Adiciona comportamento suave ao scroll dos links do menu
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
