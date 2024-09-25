document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const images = ['cloud.jpeg', 'ai.jpeg', 'network.jpeg', 'iot.jpeg', 'gd.jpeg', 'ds.jpeg', 'cyber.jpeg'];
    const passkey = "123"; // This should be set to whatever passkey you choose

    for (let i = 0; i < 7; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">${i + 1}</div>
                <div class="card-back" style="background-image: url('${images[i]}');">
                    <!-- Back content (image displayed here) -->
                </div>
            </div>
        `;
        card.addEventListener('click', function() {
            if (confirm('Do you want to select this box?')) {
                let userInput = prompt('Enter the 3-digit passkey:');
                if (userInput === passkey) {
                    this.classList.toggle('flipped');
                } else {
                    alert('Incorrect passkey.');
                }
            }
        });
        container.appendChild(card);
    }
});
