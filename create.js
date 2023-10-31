// index.js
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
        const response = await fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });

        if (response.ok) {
            window.alert('Movie has been added!');
            document.getElementById('createMovieForm').reset();
        } else {
            console.error('Failed to create a new movie.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
