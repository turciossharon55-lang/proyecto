const catalogo = [
  {
    titulo: "Nodos en Acción",
    categoria: "Documental",
    descripcion: "Un contenido sobre cómo trabajan los nodos dentro de un sistema distribuido.",
    icono: "🌐"
  },
  {
    titulo: "Escalabilidad Total",
    categoria: "Serie",
    descripcion: "Una serie que representa cómo una plataforma crece cuando aumentan los usuarios.",
    icono: "📈"
  },
  {
    titulo: "Falla Cero",
    categoria: "Película",
    descripcion: "Historia basada en un sistema que sigue funcionando aunque un servidor falle.",
    icono: "🛡️"
  },
  {
    titulo: "La Nube",
    categoria: "Tecnología",
    descripcion: "Contenido relacionado con almacenamiento cloud y servicios distribuidos.",
    icono: "☁️"
  },
  {
    titulo: "Microservicios",
    categoria: "Educativo",
    descripcion: "Explica cómo dividir una aplicación grande en servicios pequeños e independientes.",
    icono: "🧩"
  },
  {
    titulo: "CDN Global",
    categoria: "Documental",
    descripcion: "Muestra cómo los videos pueden entregarse desde servidores cercanos al usuario.",
    icono: "🚀"
  }
];

const perfiles = ["Carlos", "Acsa", "Alejandro", "Ronaldo"];
let indicePerfil = 0;

function cargarCatalogo() {
  const contenedor = document.getElementById("catalogo");

  catalogo.forEach((contenido) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <div class="movie-img">${contenido.icono}</div>
      <div class="movie-info">
        <h3>${contenido.titulo}</h3>
        <p><strong>Categoría:</strong> ${contenido.categoria}</p>
        <p>${contenido.descripcion}</p>
        <button onclick="reproducir('${contenido.titulo}', '${contenido.categoria}')">
          Reproducir
        </button>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

function reproducir(titulo, categoria) {
  const reproductor = document.getElementById("reproductor");

  reproductor.innerHTML = `
    <h3>Reproduciendo ahora</h3>
    <p><strong>${titulo}</strong></p>
    <p>Categoría: ${categoria}</p>
    <p>
      Simulación de reproducción mediante el servicio de reproducción de StreamCloud.
      La solicitud pasa por el balanceador de carga, API Gateway y servidores de contenido.
    </p>
  `;
}

function cambiarPerfil() {
  indicePerfil++;

  if (indicePerfil >= perfiles.length) {
    indicePerfil = 0;
  }

  document.getElementById("perfilActivo").textContent = perfiles[indicePerfil];
}

document.addEventListener("DOMContentLoaded", cargarCatalogo);
