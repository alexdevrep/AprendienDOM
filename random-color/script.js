document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.boton'); // Cambiado a querySelector
    button.addEventListener('click', function() {
        const colores = ['blue', 'yellow', 'white', 'red', 'green'];
        const color = Math.floor(Math.random() * colores.length); // Cálculo simplificado
        document.body.style.backgroundColor = colores[color];
    });
});
