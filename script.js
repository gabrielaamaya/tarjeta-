document.addEventListener('DOMContentLoaded', () => {
    
    const boton = document.getElementById('botonSorpresa');
    const mensajeOculto = document.getElementById('mensajeOculto');
    const card = document.querySelector('.card');

    // Efecto 3D en la tarjeta al mover el mouse
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });

    // Botón sorpresa
    boton.addEventListener('click', () => {
        mensajeOculto.style.display = 'block';
        boton.innerHTML = '<span class="icono-boton">💙</span> ¡Te Amo! 💙';
        boton.style.backgroundColor = '#00bfff';
        boton.style.color = '#000000';
        lanzarLluviaAzul();
    });

    // Lluvia de corazones y estrellas
    function lanzarLluviaAzul() {
        const colores = ['#00bfff', '#1e90ff', '#0000ff', '#87ceeb', '#ffffff'];
        const emojis = ['💙', '🎓', '✨', '⭐', '💙', '🎉', '💫', '🌟'];

        for (let i = 0; i < 80; i++) {
            const particula = document.createElement('div');
            particula.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            particula.style.position = 'fixed';
            particula.style.left = Math.random() * 100 + 'vw';
            particula.style.top = '-50px';
            particula.style.fontSize = (Math.random() * 25 + 15) + 'px';
            particula.style.color = colores[Math.floor(Math.random() * colores.length)];
            particula.style.zIndex = '9999';
            particula.style.pointerEvents = 'none';
            particula.style.transition = `transform ${3 + Math.random() * 2}s linear, opacity ${3 + Math.random() * 2}s ease-in`;
            particula.style.textShadow = '0 0 10px rgba(0, 191, 255, 0.8)';

            document.body.appendChild(particula);

            setTimeout(() => {
                particula.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
                particula.style.opacity = '0';
            }, 50);

            setTimeout(() => {
                particula.remove();
            }, 5000);
        }
    }
});