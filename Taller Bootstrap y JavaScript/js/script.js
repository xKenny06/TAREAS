
const formulario = document.getElementById('formulario');
const tabla = document.getElementById('tabla');
const contador = document.getElementById('contador');

function actualizarContador() {

    contador.textContent = tabla.querySelectorAll('tr').length;
}

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;

    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${cedula}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${fechaInicio}</td>
        <td>${fechaFin}</td>
        <td class="text-center">
            <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
        </td>
    `;

    tabla.appendChild(fila);

    formulario.reset();

    actualizarContador();
});

tabla.addEventListener('click', function(event) {
    if (event.target.classList.contains('eliminar')) {
        event.target.closest('tr').remove();
        
        actualizarContador();
    }
});