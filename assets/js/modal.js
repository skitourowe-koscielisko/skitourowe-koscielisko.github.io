(function() {
    var i, j,
        modal = null,
        img,
        caption,
        closeButton,
        imageIndex,
        images = [],
        links = document.querySelectorAll('.image.modal a'),
        linksLen = links.length;

    for (i = 0; i < linksLen; ++i) {
        links[i].addEventListener('click', openModal);
    }

    function openModal(event) {
        var gallery, link;

        event.preventDefault();
        event.stopPropagation();

        link = findLinkElement(event.target);
        gallery = findModalParent(link);
        if (!gallery) {
            return;
        }

        images = Array.from(gallery.getElementsByTagName('a'));
        imageIndex = images.findIndex(img => img === link);
        if (imageIndex < 0) {
            return;
        }

        if (!modal) {
            makeModal();
        }

        modal.style.display = 'block';

        showImage(link.href);
    }

    function makeModal() {
        var content, inner, next, prev;

        modal = document.createElement('div');
        modal.setAttribute('id', 'modal');
        closeButton = document.createElement('span');
        closeButton.setAttribute('class', 'close');
        closeButton.innerHTML = '&times;';

        content = document.createElement('div');
        content.setAttribute('class', 'content');

        inner = document.createElement('div');
        inner.setAttribute('class', 'inner');

        prev = document.createElement('a');
        prev.setAttribute('class', 'prev');
        prev.href = '#';
        prev.innerHTML = '<span>&lt;</span>';
        prev.addEventListener('click', showNextImage);
        next = document.createElement('a');
        next.setAttribute('class', 'next');
        next.href = '#';
        next.innerHTML = '<span>&gt;</span>';
        next.addEventListener('click', showNextImage);

        img = document.createElement('img');
        caption = document.createElement('span');
        caption.setAttribute('class', 'caption');

        modal.appendChild(closeButton);
        inner.appendChild(img);
        content.appendChild(inner);
        content.appendChild(prev);
        content.appendChild(next)
        content.appendChild(caption);
        modal.appendChild(content);

        modal.addEventListener('click', closeModal);

        document.body.appendChild(modal);
    }

    function closeModal(event) {
        if (event.target === modal || event.target === closeButton) {
            modal.style.display = 'none';
        }
    }

    function findLinkElement(el) {
        for (; el && el.tagName !== 'A'; el = el.parentElement);
        return el;
    }

    function findModalParent(el) {
        for (; el && !el.classList.contains('modal'); el = el.parentElement);
        return el;
    }

    function showImage(image) {
        img.setAttribute('src', image);
        img.alt = image.alt;

        caption.innerText = img.title;
    }

    function showNextImage(event) {
        event.preventDefault();
        event.stopPropagation();
        event.target.blur();
        if (images.length == 0) {
            return;
        }

        if (event.target.classList.contains('prev')) {
            if (--imageIndex < 0) {
                imageIndex = images.length - 1;
            }
        } else {
            imageIndex = ++imageIndex % images.length;
        }
        showImage(images[imageIndex].href);
    }

})();
