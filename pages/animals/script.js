const animalsBase = [
    { name: 'ведмідь', url: '/pages/wiki/bear/index.html', img: '/images/ani/card/bear.png' },
    { name: 'кіт', url: '/pages/wiki/cat/index.html', img: '/images/ani/card/cat.png' },
    { name: 'коала', url: '/pages/wiki/coala/index.html', img: '/images/ani/card/coala.png' },
    { name: 'жирафа', url: '/pages/wiki/giraffa/index.html', img: '/images/ani/card/giraffa.png' },
    { name: 'лелека', url: '/pages/wiki/lelekya/index.html', img: '/images/ani/card/lelekya.png' },
    { name: 'панда', url: '/pages/wiki/panda/index.html', img: '/images/ani/card/panda.png' }
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
    let activeSuggestions = [];

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        searchResults.innerHTML = ''; 
        activeSuggestions = [];

        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        activeSuggestions = animalsBase.filter(animal => animal.name.includes(query)).slice(0, 3);

        if (activeSuggestions.length > 0) {
            searchResults.style.display = 'block';

            activeSuggestions.forEach(animal => {
                const item = document.createElement('div');
                item.classList.add('search-result-item');

                const img = document.createElement('img');
                img.src = animal.img;
                img.classList.add('search-item-img');

                const text = document.createElement('span');
                text.textContent = animal.name;

                item.appendChild(img);
                item.appendChild(text);

                item.addEventListener('click', () => {
                    window.location.href = animal.url;
                });

                searchResults.appendChild(item);
            });
        } else {
            searchResults.style.display = 'none';
        }
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && activeSuggestions.length > 0) {
            window.location.href = activeSuggestions[0].url;
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target !== searchInput && e.target !== searchResults) {
            searchResults.style.display = 'none';
        }
    });
}