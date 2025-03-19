//------- Sorteo Amigo Secreto ------------

let amigos = [];
//let nombresAmigos = [];

function agregarAmigo () {
    let nombresAmigos = (document.getElementById('amigo').value);
    console.log(`Nombre amigo: ${nombresAmigos}`);
   if (nombresAmigos == '') {
    alert('Por favor, ingresa un nombre de Amigo')
   }
    else {
    amigos.push(nombresAmigos);
    console.log(`Nueva lista: ${amigos}`)
    document.getElementById('amigo').value='';
    }
}


