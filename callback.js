let getUsuarioById = (id,callback) =>{
    let usuario = {
        nombre: 'Martiniano',
        id
    }

    if (id === 20) {
        callback (`El usuario con id ${id} no existe en la base de datos.`)
    }else{
        callback(null,usuario);
    }
}


getUsuarioById (20, (err,usuario)=>{
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos: ', usuario);
});


// Punto 1: Cuando se cambia el id, se toma el nombre del usuario definido
// (Martiniano en este caso), independientemente del numero de id que ponga, excepto por el 20.