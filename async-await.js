/*
    Async Await
*/

// let getNombre = async() => {
//     return 'Yamil';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Yamil');
        }, 3000);

    });
};


let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}


saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    })