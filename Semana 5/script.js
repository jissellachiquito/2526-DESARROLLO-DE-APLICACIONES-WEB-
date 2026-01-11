
const input = document.getElementById("imageUrl");
const addBtn = document.getElementById("addImage");
const deleteBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
addBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (url === "") return;

  const img = document.createElement("img");
  img.src = url;

  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("selected");
    }
    img.classList.add("selected");
    selectedImage = img;
  });

  gallery.appendChild(img);
  input.value = "";
});

// Eliminar imagen seleccionada
deleteBtn.addEventListener("click", () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  }
});

// Evento input
input.addEventListener("input", () => {
  // Se puede usar para validar en tiempo real si se desea
});

// Atajos de teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
  if (e.key === "Delete") {
    deleteBtn.click();
  }
});
