document.addEventListener("DOMContentLoaded", () => {
    const loadBtn = document.getElementById('load-btn');
    const catImg = document.getElementById('cat-img');

    loadBtn.addEventListener('click', () => {
        fetch('https://cataas.com/cat?json=true')
            .then(response => response.json())
            .then(data => {
                if (data._id) {
                    catImg.src = 'https://cataas.com/cat/' + data._id;
                } else {
                    console.error('ID da imagem não encontrado.');
                }
            })
            .catch(error => console.error('Erro ao carregar a imagem:', error));
    });
})
