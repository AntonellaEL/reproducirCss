const emojis = document.querySelectorAll('.em');

emojis.forEach(emoji => {
    emoji.addEventListener('mouseenter', () => {
        emoji.style.opacity = '0';
    });

    emoji.addEventListener('mouseleave', () => {
        emoji.style.opacity = '1';
    });
});