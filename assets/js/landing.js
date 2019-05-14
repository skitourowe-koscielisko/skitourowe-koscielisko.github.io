(function() {
    var opacity = 1.0;
    const header = document.querySelector('article header');
    window.addEventListener('scroll', function(event) {
        const newOpacity = 1 - (event.pageY / (window.innerHeight / 2)).toFixed(1);
        if (newOpacity < 0)
            return;
        if (newOpacity != opacity) {
            opacity = newOpacity;
            header.style = `opacity: ${opacity}`;
        }
    });
})();

