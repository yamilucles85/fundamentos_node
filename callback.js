// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);\

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Yamil',
        id
    }

    if (id === 20) {
        console.log(`El usuario con id ${ id } no existe en la DB`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);

});