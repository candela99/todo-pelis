const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch('https://api.themoviedb.org/3/movie/1100?api_key=25df70143d25db476a828f0489a7a9ec&language=es-AR');
		const datos = await respuesta.json();
		if(respuesta.status === 200) {
			console.log(datos.title);
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