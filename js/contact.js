// contact form functionality
const contactFormController = (() => {
    const _contactInputs = document.querySelectorAll('.contact input');
    const _contactButton = document.querySelector('.contact button');
    const _contactTextarea = document.querySelector('.contact textarea');
    const _contactTitle = document.querySelector('.contact h6');

    _contactButton.addEventListener('click', (event) => {
        event.preventDefault();

        for(let i = 0; i < _contactInputs.length; i++) {
            _contactInputs[i].value = '';
        }
        _contactTextarea.value = '';
        _contactTitle.style.opacity = "1";

        window.setTimeout(() => {
            _contactTitle.style.opacity = "0";
        }, 3500);
    });
})();