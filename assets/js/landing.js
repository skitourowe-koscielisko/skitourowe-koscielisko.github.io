(function() {
    var opacity = 1.0;
    var paddingRight = 0;
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

    // Can't do this in CSS :(
    shiftParent();
    window.addEventListener('resize', shiftParent);
    function shiftParent() {
        const minWidth = 1024;
        var width = document.body.clientWidth + paddingRight;
        console.log('resize', document.body.clientWidth, document.body.classList);
        if (width > 1024 && document.body.classList.contains('landing'))
        {
            document.body.parentElement.style.paddingRight = '90px';
            paddingRight = 90;
        } else {
            document.body.parentElement.style.paddingRight = '0px';
            paddingRight = 0;
        }

    }
})();

