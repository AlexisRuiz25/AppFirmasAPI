const Router = require('express');
const { check } = require('express-validator');
const { crearFirmas,
        obtenerFirmas,
        obtenerLaboratorio,
        actualizarFirmas,
        borrarFirmas,
        obtenerFirmasFecha,
        obtenerFirmasbyUsu} = require('../controllers/firmas');
const { existeFirmasPorId} = require('../helpers/db-validators');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');

const router = Router();

//Obtener todas las Firmas publico
router.get('/', [
    validarJWT,
    //esAdminRole,
    validarCampos
], obtenerFirmas);


//Obtener una Firmas por id-publico
router.get('/findFecha', [
    validarJWT,
], obtenerFirmasFecha);

//Obtener una Firmas por id-publico
router.get('/:cedula', [
    check('cedula').custom(existeFirmasPorId),
    validarCampos
], obtenerLaboratorio);

//firmasbyRecomendao
router.get('/findUsu/:id', [
    //check('id', 'No es un id de Mongo válido').isMongoId(),
    validarJWT,
    validarCampos
], obtenerFirmasbyUsu);

//Crear un Firmas privado - cualqiuer persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    validarCampos
], crearFirmas);

//Actualizar privado token valido
router.put('/:id', [
    validarJWT,
//    esAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id'),
    validarCampos
], actualizarFirmas);
 
//Borrar Firmas solo Admin
router.delete('/:id', [
    validarJWT,
//    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos
], borrarFirmas);

module.exports = router;