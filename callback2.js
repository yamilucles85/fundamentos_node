let empleados = [{
    id: 1,
    nombre: 'Yamil'
}, {
    id: 2,
    nombre: 'Edax'
}, {
    id: 3,
    nombre: 'Gabriela'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

// Función para obtener el empleado por medio del ID
let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id) // Obtengo el empelado por medio del Id.

    // Si no se obtiene el empleado se llama el callback y muestra mensaje.
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleadoDB.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    })
});