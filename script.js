// Esperamos a que la página cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    const boton = document.getElementById('botonSorpresa');
    const mensajeOculto = document.getElementById('mensajeOculto');

    // Función que se ejecuta al hacer clic en el botón
    boton.addEventListener('click', () => {
        // Mostramos el mensaje oculto
        mensajeOculto.style.display = 'block';
        
        // Cambiamos el texto del botón
        boton.textContent = '¡Te Amo! 💙';
        boton.style.backgroundColor = '#00bfff';
        boton.style.color = '#000000';

        // Lanzamos el efecto de lluvia azul
        lanzarLluviaAzul();
    });

    // Función para crear la lluvia de elementos azules
    function lanzarLluviaAzul() {
        const colores = ['#00bfff', '#1e90ff', '#0000ff', '#87ceeb'];
        const emojis = ['💙', '🎓', '✨', '⭐', '💙', '🎉'];

        for (let i = 0; i < 60; i++) {
            // Creamos un elemento (emoji)
            const particula = document.createElement('div');
            particula.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Estilos aleatorios para que caigan en diferentes lugares
            particula.style.position = 'fixed';
            particula.style.left = Math.random() * 100 + 'vw';
            particula.style.top = '-50px';
            particula.style.fontSize = (Math.random() * 25 + 15) + 'px';
            particula.style.color = colores[Math.floor(Math.random() * colores.length)];
            particula.style.zIndex = '9999';
            particula.style.pointerEvents = 'none'; // Para que no bloqueen clics
            particula.style.transition = 'transform 3.5s linear, opacity 3.5s ease-in';

            document.body.appendChild(particula);

            // Animación de caída
            setTimeout(() => {
                particula.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                particula.style.opacity = '0';
            }, 50);

            // Eliminamos el elemento después de que termine la animación
            setTimeout(() => {
                particula.remove();
            }, 3500);
        }
    }
});