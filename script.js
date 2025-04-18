document.addEventListener('DOMContentLoaded', () => {
    // Add a class to trigger the initial animations
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-in-out';
        container.style.opacity = '1';
    }, 100);

    // Add hover effect to music info
    const musicInfo = document.querySelector('.music-info');
    musicInfo.addEventListener('mouseenter', () => {
        musicInfo.style.transform = 'translateY(-5px)';
        musicInfo.style.transition = 'transform 0.3s ease';
    });

    musicInfo.addEventListener('mouseleave', () => {
        musicInfo.style.transform = 'translateY(0)';
    });

    // Add pulse animation to title
    const title = document.querySelector('.title');
    setInterval(() => {
        title.style.transform = 'scale(1.05)';
        title.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            title.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
});