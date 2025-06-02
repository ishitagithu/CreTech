document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const occasion = document.getElementById('occasion').value;

    document.getElementById('cardName').innerText = name;
    document.getElementById('cardMessage').innerText = message;
    document.getElementById('cardOccasion').innerText = occasion;

    document.getElementById('greetingCard').style.display = 'block';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const card = document.getElementById('greetingCard');
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'greeting_card.png';
        link.click();
    });
});
