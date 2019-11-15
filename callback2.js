let empleados = [{
    id:1,
    nombre: 'Martiniano'
},
{
    id:2,
    nombre: 'Martin'
},
{
    id:3,
    nombre: 'Mariano'
}];


let salarios = [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 10000
},
{
    id: 3,
    salario: 100
}];

let getEmpleado = (id, callback) =>{
    let empleadoDB = empleados.find(empleado => empleado.id ===id)
    if(!empleadoDB){
        callback(`No existe un empleado con el id ${id}`);
    }
    else
    callback(null,empleadoDB);
}

getEmpleado(1,(err,empleado)=>{
    if (err){
        return console.log(err);
    }
    console.log(empleado);
});


let getSalario = (id, callback) => {
    let salarioDB = salarios.find(salario => salario.id === id)
    if (!salarioDB){
        callback(`No existe un empleado con el id ${id}`);
    }
    callback(null,salarioDB);
}

getSalario(1,(err,salario)=>{
    if (err){
        return console.log(err);
    }
    console.log(salario);
});