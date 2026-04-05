const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';


 // Agrega una nueva nota al archivo.
  //@param {string} titulo - "El título de la nota : "
  //@param {string} contenido - "El contenido de la nota : "

function agregarNota(titulo, contenido) {
  let notas = [];
  
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  // VALIDACIÓN: Revisar si ya existe una nota con ese título
  const existe = notas.find((nota) => nota.titulo === titulo);

  if (existe) {
    console.log(`Error: Ya existe una nota con el título "${titulo}".`);
    return; // Detiene la ejecución para no agregar el duplicado
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    console.log('Notas guardadas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}


 // Elimina una nota por su título.
 // @param {string} titulo - "El título de la nota a eliminar"
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    // Filtramos las notas
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // VALIDACIÓN: Si la cantidad de notas es la misma, no se encontró el título
    if (notas.length === notasRestantes.length) {
      console.log(`Error: No se encontró ninguna nota con el título "${titulo}".`);
      return; // Salimos de la función sin escribir nada
    }

    // Si el título existía, guardamos los cambios
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada con éxito.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}


// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');

// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
[
  { "titulo": "Compras", "contenido": "Comprar leche y pan." },
  { "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
]

