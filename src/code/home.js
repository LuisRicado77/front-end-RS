// Función para cargar contenido dinámico
function loadContent(selector, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error('Error al cargar el contenido:', error));
  }
  
  // Cargar el header y el footer en la página
  document.addEventListener("DOMContentLoaded", function() {
    loadContent("header", "/src/templates/header.html");
    loadContent("footer", "/src/templates/footer.html");
  });
  