document.addEventListener('DOMContentLoaded', () => {
    console.log('BetterHelp Clone Loaded');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const type = card.querySelector('.card-label').textContent;
            alert(`Starting questionnaire for: ${type}`);
            // In a real app, this would route to the quiz
        });
    });
});
