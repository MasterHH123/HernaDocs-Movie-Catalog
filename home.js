// home.js
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('http://localhost:3000/movies');
        if (response.ok) {
            const movies = await response.json();
            const movieList = document.getElementById('movieList');
            if (movies.length > 0) {
                movieList.innerHTML = ''; // Clear any previous entries
                movies.forEach(movie => {
                    const item = document.createElement('li');
                    item.classList.add('list-group-item');
                    item.innerHTML = `
                        <h4 class="mb-1">${movie.name}</h4>
                        <p class="mb-1">${movie.synopsis}</p>
                        <p class="mb-1">Genre: ${movie.genre}</p>
                        <p class="mb-1">Duration: ${movie.duration} minutes</p>
                        <p class="mb-1">Director: ${movie.director}</p>
                        <p class="mb-1">Actors: ${movie.actors}</p>
                    `;
                    movieList.appendChild(item);
                });
            } else {
                const noMoviesMessage = document.querySelector('.text-center.mt-3a p');
                noMoviesMessage.textContent = 'No movies available.';
            }
        } else {
            console.error('Failed to fetch movies.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
