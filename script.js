document.addEventListener('DOMContentLoaded', () => {
    // Array de noticias de ejemplo
    const newsData = [
        "Nueva actualización del sitio web disponible.",
        "Descubre las últimas tendencias en tecnología.",
        "Entrevista exclusiva con el CEO de la compañía.",
        "Eventos próximos en tu ciudad.",
        "Consejos para mejorar tu productividad."
    ];

    const newsContainer = document.getElementById('news-container');

    // Función para renderizar las noticias
    function renderNews() {
        newsData.forEach(news => {
            const listItem = document.createElement('li');
            listItem.textContent = news;
            newsContainer.appendChild(listItem);
        });
    }

    renderNews();
});

document.getElementById("error").addEventListener("click", saludar)

function saludar() {
    alert("Error!");
}
<li><a href="#" id= "error" >Inicio</a></li>
