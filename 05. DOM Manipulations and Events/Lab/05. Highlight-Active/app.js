function focused() {
    Array
        .from(document.getElementsByTagName('input'))
        .forEach(field => {
            field.addEventListener('focus', ev => ev.target.parentNode.classList.add('focused'));
            field.addEventListener('blur', ev => ev.target.parentNode.classList.remove('focused'));
        });
}