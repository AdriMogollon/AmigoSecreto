let amigos = []; // Lista de amigos que se ingresan

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nombreAmigos = document.getElementById('amigo').value.trim();

    if (nombreAmigos === '') {
        alert('Por favor, ingresa un nombre de Amigo');
        return;
    }

    if (amigos.includes(nombreAmigos)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombreAmigos);
    document.getElementById('amigo').value = ''; // Limpiar input
    actualizarLista();
}

// Actualizar la lista de amigos visualmente
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar antes de actualizar

    amigos.forEach((amigo, index) => {
        let div = document.createElement('div');
        div.classList.add('nombre-item');
        div.textContent = amigo;

        // Botón eliminar (ícono de basura 🗑️)
        let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '🗑️';
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.onclick = () => eliminarAmigo(index);

        div.appendChild(botonEliminar);
        lista.appendChild(div);
    });
}

// Eliminar amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para realizar el sorteo de manera segura
function realizarSorteo() {
    if (amigos.length < 3) {
        alert('Debe haber al menos 3 amigos para realizar el sorteo.');
        return;
    }

    let amigosShuffle = [...amigos];
    shuffleArray(amigosShuffle); // Desordenar la lista usando Fisher-Yates
    let resultados = {};

    for (let i = 0; i < amigos.length; i++) {
        let asignado = (i === amigos.length - 1) ? amigosShuffle[0] : amigosShuffle[i + 1];
        resultados[amigos[i]] = asignado;
    }

    mostrarResultados(resultados);
}

// Algoritmo de mezcla (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    let resultadosDiv = document.getElementById('resultado');
    resultadosDiv.innerHTML = ''; // Limpiar resultados previos

    for (let amigo in resultados) {
        let divResultado = document.createElement('div');
        divResultado.classList.add('resultado-item');
        divResultado.textContent = `${amigo} → ${resultados[amigo]}`;

        resultadosDiv.appendChild(divResultado);
    }
}

    console.log(`Nueva lista: ${amigos}`)
    document.getElementById('amigo').value='';
    }
}


