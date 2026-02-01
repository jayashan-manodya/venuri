document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const background = document.querySelector('.background-animation');

    // Toggle envelope open/close
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        document.body.classList.toggle('letter-open');
    });

    // Create floating hearts particles
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('heart-particle');

        const size = Math.random() * 20 + 10 + 'px';
        heart.style.fontSize = size;

        heart.style.left = Math.random() * 100 + 'vw';

        const duration = Math.random() * 5 + 5 + 's';
        heart.style.animationDuration = duration;

        background.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, parseFloat(duration) * 1000);
    }

    // Generate hearts every 500ms
    setInterval(createHeart, 500);
});
