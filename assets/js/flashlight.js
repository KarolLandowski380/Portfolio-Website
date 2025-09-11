document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.innerWidth > 768;
    
    if (!isDesktop) return; 
    
    const flashlight = document.createElement('div');
    flashlight.className = 'flashlight-glow';
    document.body.appendChild(flashlight);
    
    document.body.classList.add('flashlight-active');
    
    document.addEventListener('mousemove', (e) => {
        flashlight.style.left = e.clientX + 'px';
        flashlight.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseleave', () => {
        flashlight.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        if (document.body.classList.contains('flashlight-active')) {
            flashlight.style.opacity = '1';
        }
    });
});