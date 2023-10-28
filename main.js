// JavaScript code on your client-side (main.js)
document.getElementById('createMovieForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const movieData = {
        name: formData.get('name'),
        synopsis: formData.get('synopsis'),
        genre: formData.get('genre'),
        duration: formData.get('duration'),
        director: formData.get('director'),
        actors: formData.get('actors')
    };

    try {
        const response = await fetch('/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });

        if (response.ok) {
            const newMovie = await response.json();
            // Update the movie list with the new movie
            addMovieToList(newMovie);
        } else {
            console.error('Failed to create a new movie.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function addMovieToList(movie) {
    const list = document.getElementById('movieList');
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
    list.appendChild(item);
}
