const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

document.addEventListener("DOMContentLoaded", () => {
    let temaSalvo = localStorage.getItem("tema"); 

    if (!temaSalvo) {
        temaSalvo = "tema_azul";
        localStorage.setItem("tema", temaSalvo);
    }

    mudar_tema(temaSalvo);
    carregarEventos();
    startAutoPlay(); // Inicia o autoplay quando a página carrega
});

function mudar_tema(tema) {
    console.log("Aplicando tema:", tema);

    const root = document.documentElement;

    const temas = {
        tema_azul: {
            "--cor-click": "#1E90FF",
            "--cor-sombra": "#1565C0",
            "--cor-text": "#0D0D0D",
            "--cor-back1": "#E3F2FD",
            "--cor-back2": "#90CAF9"
        },
        tema_verde: {
            "--cor-click": "#2E7D32",
            "--cor-sombra": "#1B5E20",
            "--cor-text": "#0D0D0D",
            "--cor-back1": "#E8F5E9",
            "--cor-back2": "#81C784"
        },
        tema_escuro: {
            "--cor-click": "#FF9800",
            "--cor-sombra": "#F57C00",
            "--cor-text": "black", 
            "--cor-back1": "#121212",
            "--cor-back2": "#424242"
        }
    };

    if (temas[tema]) {
        Object.entries(temas[tema]).forEach(([prop, value]) => {
            root.style.setProperty(prop, value);
        });

        localStorage.setItem("tema", tema);
        console.log("Tema salvo:", tema);
    } else {
        console.warn("Tema inválido:", tema);
    }
}

const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
let autoPlayInterval;
let index = 0;

function carregarEventos() {
    carousel.innerHTML = ''; // Limpa o carrossel antes de adicionar novos cards
    
    eventos.forEach(evento => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${evento.image}" alt="${evento.title}">
            <div class="info">
                <h3>${evento.title}</h3>
                <p><strong>Data:</strong> ${evento.date} | <strong>Hora:</strong> ${evento.time}</p>
                <p><strong>Local:</strong> ${evento.location}</p>
                <p>${evento.description}</p>
            </div>
        `;
        carousel.appendChild(card);
    });
}

function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoPlay() {
    stopAutoPlay(); // Garante que só há um intervalo ativo
    autoPlayInterval = setInterval(nextCard, 5000);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Event listeners
document.getElementById('nextBtn')?.addEventListener('click', () => {
    nextCard();
    resetAutoPlay();
});

document.getElementById('prevBtn')?.addEventListener('click', () => {
    prevCard();
    resetAutoPlay();
});

// Pausar quando o mouse está sobre o carrossel
carouselContainer?.addEventListener('mouseenter', stopAutoPlay);
carouselContainer?.addEventListener('mouseleave', startAutoPlay);

// Arrastar no celular
let startX;
carousel?.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopAutoPlay();
});

carousel?.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
    startAutoPlay();
});