const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=25df70143d25db476a828f0489a7a9ec&language=es-AR');
		const datos = await respuesta.json();

		let peliculas = '';
		if(respuesta.status === 200) {
			datos.results.forEach(pelicula => {
				peliculas += `<h1>${pelicula.title}</h1>`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;
		} else if(respuesta.status === 401) {
			console.log('Error: key no válida');
		} else if(respuesta.status === 404) {
			console.log('La película que buscas no existe');
		}
		console.log(respuesta);
	} catch {
		console.log(error);
	}
}

cargarPeliculas();