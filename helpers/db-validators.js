const {Lider, Laboratorios, Firmas} = require('../models');
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleVaido = async (rol = '') => {
    //Verifcar si existe el rol    
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado`)
    }

}
/////////////////////////////////////////////////////////////////
const emailExiste = async (correo = '') => {
    //Verifcar si existe el correo
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo} ya esta registrado`);

    }

}
/////////////////////////////////////////////////////////////////
const existeUsuarioPorId = async (id) => {
    //Verifcar si existe el correo
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe: ${id}`);

    }

}
///////////////////////////////////////////////////////////////////
const existeLiderPorId = async (id) => {
    //Verifcar si existe el correo
    const existeLider = await Lider.findById(id);
    if (!existeLider) {
        throw new Error(`La sala ya existe: ${id}`);
    }

}

//Alexis
const existeFirmasPorId = async (cedula) => {
    //Verifcar si existe el correo
    const existeFirma = await Firmas.findOne({cedula})
    if (!existeFirma) {
        throw new Error(`La cedula no existe: ${cedula}`);
    }

}
///////////////////////////////////////////////////////////////////
const existeLaboratoriosPorId = async (id) => {
    //Verifcar si existe el laboratorio
    const existeLaboratorio = await Laboratorios.findById(id);
    if (!existeLaboratorio) {
        throw new Error(`El Laboratorio: ${id}`);
    }

}
///////////////////////////////////////////////////////////////////
const valida = async (id='') => {
    //Verifcar si existe el correo
        console.log("Salida");
}
///////////////////////////////////////////////////////////////////
//Validar colecciones   
const coleccionesPermitidas=(coleccion='',colecciones=[])=>{
    const incluida = colecciones.includes(coleccion);
    if(!incluida)
    {
        throw new Error(`La coleccion ${coleccion} no es permitida, ${colecciones}`);
    }
    return true;
}
///////////////////////////////////////////////////////////////////
module.exports = {
    esRoleVaido,
    existeLiderPorId,
    existeLaboratoriosPorId,
    emailExiste,
    existeUsuarioPorId,
    existeFirmasPorId,//Alexis
    coleccionesPermitidas,
    valida,
}