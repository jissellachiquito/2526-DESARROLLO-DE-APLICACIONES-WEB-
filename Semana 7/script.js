// Referencias al DOM
const lista = document.getElementById("lista_productos");
const btnAgregar = document.getElementById("boton_agregar");

// Lista inicial de productos de maquillaje
let productos = [
    {
        nombre: "Labial Mate",
        precio: 3.50,
        descripcion: "Labial de larga duración"
    },
    {
        nombre: "Base Líquida",
        precio: 2.00,
        descripcion: "Base para todo tipo de piel"
    },
    {
        nombre: "Rímel",
        precio: 3.75,
        descripcion: "Máscara para pestañas"
    },
    {
        nombre: "Iluminador",
        precio: 1.75,
        descripcion: "Glow para resaltar facciones del rostro"
    },
    {
        nombre: "Delineador de Ojos",
        precio: 1.00,
        descripcion: "Define la línea de las pestañas superiores e inferiores"
    },
    {
        nombre: "Fijador de Maquillaje",
        precio: 4.00,
        descripcion: "Sella el maquillaje"
    }
];

// Función para mostrar productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la pagina
renderizarProductos();

// Agregar nuevo producto desde los inputs
btnAgregar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;

    if (nombre === "" || precio === "" || descripcion === "") {
        alert("Por favor, complete todos los campos");
        return;
    }

    const nuevoProducto = {
        nombre: nombre,
        precio: parseFloat(precio),
        descripcion: descripcion
    };

    productos.push(nuevoProducto);
    renderizarProductos();

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
});

