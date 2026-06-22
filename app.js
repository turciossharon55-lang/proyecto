const peliculas = [
  {
    titulo: "Amor en la Nube",
    categoria: "Romance / Cloud",
    descripcion: "Una historia donde todo el contenido se guarda y se entrega desde la nube.",
    icono: "☁️"
  },
  {
    titulo: "Nodos de Medianoche",
    categoria: "Suspenso / Distribuido",
    descripcion: "Varios nodos trabajan juntos para mantener la plataforma activa.",
    icono: "🌐"
  },
  {
    titulo: "Estrellas del Catálogo",
    categoria: "Drama / Catálogo",
    descripcion: "El servicio de catálogo organiza películas, series, portadas y categorías.",
    icono: "⭐"
  },
  {
    titulo: "Reproducción Rosa",
    categoria: "Streaming / Video",
    descripcion: "Simulación del servicio encargado de reproducir contenido multimedia.",
    icono: "▶️"
  },
  {
    titulo: "Fallo Imposible",
    categoria: "Acción / Tolerancia a fallos",
    descripcion: "Aunque un servidor falle, otros servicios siguen funcionando.",
    icono: "🛡️"
  },
  {
    titulo: "Escala Infinita",
    categoria: "Ciencia ficción / Escalabilidad",
    descripcion: "El sistema crece agregando más servidores cuando hay más usuarios.",
    icono: "📈"
  },
  {
    titulo: "Cache de Amor",
    categoria: "Comedia / Cache",
    descripcion: "Guarda datos frecuentes para que la plataforma responda más rápido.",
    icono: "💚"
  },
  {
    titulo: "CDN Global",
    categoria: "Aventura / CDN",
    descripcion: "Los videos se entregan desde servidores cercanos al usuario.",
    icono: "🚀"
  }
];

function cargarPeliculas() {
  const movieGrid = document.getElementById("movieGrid");

  peliculas.forEach((pelicula) => {
    const card = document.createElement("article");
    card.classList.add("movie-card");

    card.innerHTML = `
      <div class="poster">${pelicula.icono}</div>
      <div class="movie-content">
        <h3>${pelicula.titulo}</h3>
        <p class="category">${pelicula.categoria}</p>
        <p class="description">${pelicula.descripcion}</p>
        <button onclick="reproducir('${pelicula.titulo}', '${pelicula.categoria}', '${pelicula.icono}')">
          ▶ Reproducir
        </button>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}

function reproducir(titulo, categoria, icono) {
  const playerBox = document.getElementById("playerBox");

  playerBox.innerHTML = `
    <div class="screen">
      <span>${icono}</span>
    </div>

    <div class="player-info">
      <h2>${titulo}</h2>
      <p><strong>Categoría:</strong> ${categoria}</p>
      <p>
        Reproducción simulada usando StreamCloud. La solicitud pasa por el
        balanceador de carga, API Gateway, microservicio de reproducción,
        almacenamiento cloud y CDN.
      </p>
      <p>
        Estado del sistema: disponible, replicado y tolerante a fallos.
      </p>
      <div class="stars">★★★★★</div>
    </div>
  `;

  playerBox.scrollIntoView({ behavior: "smooth" });
}

function seleccionarPerfil(nombre) {
  document.getElementById("perfilActual").textContent = nombre;

  const perfiles = document.querySelectorAll(".profile-card");
  perfiles.forEach((perfil) => perfil.classList.remove("active"));

  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", cargarPeliculas);
