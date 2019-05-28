(function() {
    var opacity = 1.0;
    var paddingRight = 0;
    const header = document.querySelector('article header');


    /*
    window.addEventListener('scroll', function(event) {
        const newOpacity = 1 - (event.pageY / (window.innerHeight / 2)).toFixed(1);
        if (newOpacity < 0)
            return;
        if (newOpacity != opacity) {
            opacity = newOpacity;
            header.style = `opacity: ${opacity}`;
        }
    });
    */

    // Can't do this in CSS :(
    shiftParent();
    window.addEventListener('resize', shiftParent);
    function shiftParent() {
        const minWidth = 1920;
        var width = paddingRight +
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;

        console.log('resize', width, document.body.classList);
        if (width > minWidth && document.body.classList.contains('landing'))
        {
            document.body.parentElement.style.paddingRight = '90px';
            if (!window.innerWidth)
                paddingRight = 90;
        } else {
            document.body.parentElement.style.paddingRight = '0px';
            if (!window.innerWidth)
                paddingRight = 0;
        }

    }
})();

