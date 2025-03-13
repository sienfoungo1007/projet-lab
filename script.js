document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.feature-card');
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert("Veuillez remplir tous les champs.");
        } else {
            alert("Merci pour votre message. Nous vous répondrons bientôt.");
            this.reset();
        }
    });
});
