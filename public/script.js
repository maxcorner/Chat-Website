document.getElementById('inputForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const response = await fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
    });
    const data = await response.json();
    displayData(data);
});

async function displayData(data) {
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = '';
    data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        displayArea.appendChild(p);
    });
}

window.onload = async function() {
    const response = await fetch('/data');
    const data = await response.json();
    displayData(data);
}