const propiedades_alquiler = [
    {
      nombre: "Departamento en Iquique",
      src: "https://http2.mlstatic.com/D_NQ_NP_978751-MLC51948652912_102022-O.webp",
      descripcion:
        "Este moderno departamento en Iquique ofrece vistas al mar, una ubicación céntrica y comodidades como piscina y gimnasio.",
      ubicacion: "Calle Sagasca 2131, Playa Brava, Iquique.",
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Departamento en Viña del Mar",
      src: "https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4729_1.jpg",
      descripcion:
        "Este elegante departamento en Viña del Mar cuenta con vistas al océano, ideal para disfrutar de la ciudad costera.",
      ubicacion: "Eduardo Titus 755, Villa Dulce, Viña del Mar.",
      habitaciones: 2,
      costo: 1200,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Departamento en Santiago",
      src: "https://constructorarupanco.com/wp-content/uploads/2021/08/Stuio-SDGII_01.jpg",
      descripcion:
        "Moderno departamento en Santiago ofrece comodidad y estilo en el corazón de la ciudad, perfecto para una vida urbana vibrante.",
      ubicacion: "Santo Domingo 1944, Santiago Centro",
      habitaciones: 3,
      costo: 4500,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Departamento en Concepción",
      src: "https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4464_1.jpg",
      descripcion:
        "Este acogedor departamento en Concepción combina confort y funcionalidad, ideal para disfrutar de la vida en la ciudad.",
      ubicacion: "Maipú 1163, Concepción",
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true,
    },
    {
        nombre: "Departamento en Punta Arenas",
        src: "https://cache.enlaceinmobiliario.cl/cdn-cgi/image/format=webp,height=auto/FachadaBulnes-65205542c19dc8.webp",
        descripcion:
          "Encantador departamento en Punta Arenas ofrece una cálida y acogedora estancia, perfecto para disfrutar de la ciudad y su entorno natural.",
        ubicacion:  "Av. Presidente Manuel Bulnes N° 0728, Punta Arenas",
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true,
      },
  ];
  
  const arriendo = document.querySelector("#alquiler");
  
  for (let propiedadArriendo of propiedades_alquiler) {
    const HTML = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedadArriendo.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${propiedadArriendo.nombre}</h5>
          <p class="card-text">${propiedadArriendo.descripcion}</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedadArriendo.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${
              propiedadArriendo.habitaciones
            } Habitaciones
          </p>
          <p>
            <i class="fas fa-bath"></i> ${propiedadArriendo.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> $${propiedadArriendo.costo}</p>
          <p class="text-${propiedadArriendo.smoke ? "success" : "danger"}">
            <i class="fas fa-smoking${
              propiedadArriendo.smoke ? "" : "-ban"
            }"></i> ${
      propiedadArriendo.smoke ? "Permitido fumar" : "No se permite fumar"
    }
          </p>
          <p class="text-${propiedadArriendo.pets ? "success" : "danger"}">
            <i class="fas fa${propiedadArriendo.pets ? "-paw" : "-ban"}"></i>
            ${
              propiedadArriendo.pets
                ? "Mascotas permitidas"
                : "No se permiten mascotas"
            }
          </p>
        </div>
      </div>
    </div>
    `;
    arriendo.innerHTML += HTML;
  }
  