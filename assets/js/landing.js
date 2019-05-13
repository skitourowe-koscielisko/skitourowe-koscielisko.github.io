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

    const articles = document.querySelectorAll('.articles');
    for (let articleSection of articles) {
        bindScrollEvents(articleSection);
    }

    function bindScrollEvents(section) {
        const articleWidth = calculateArticleWidth();
        const container = section.querySelector('.container');
        const scrolls = section.querySelectorAll('.hscroll');
        for (let scroll of scrolls) {
            scroll.addEventListener('click', onScrollClick);
        }

        function onScrollClick(event) {
            event.preventDefault();
            if (event.target.classList.contains('back')) {
                container.scrollBy(-articleWidth, 0)
            } else if (event.target.classList.contains('forward')) {
                container.scrollBy(articleWidth, 0)
            }
        }

        function calculateArticleWidth() {
            let width = 0;
            const article = section.querySelector('.list > section');
            const style = article.currentStyle || window.getComputedStyle(article);
            if (!style) return 0;
            width += parseInt(style.width) || 0;
            width += parseInt(style.paddingLeft) || 0;
            width += parseInt(style.paddingRight) || 0;
            width += parseInt(style.marginLeft) || 0;
            width += parseInt(style.marginRight) || 0;
            return width;
        }
    }

})();

